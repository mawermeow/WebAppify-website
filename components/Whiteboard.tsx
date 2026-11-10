"use client";

import type { Locale } from "@/lib/locales";
import { translator, type Message } from "@/lib/messages";
import { useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";

type Point = { x: number; y: number };
type Node = Point & { id: number; label: string; detail: string; tone: string; parent?: number };

const seedNodes: (Omit<Node, "label" | "detail"> & { label: Message; detail: Message })[] = [
  { id: 1, x: 24, y: 25, label: "Collect ideas", detail: "DISCOVER", tone: "mint" },
  { id: 2, x: 72, y: 25, label: "Sort themes", detail: "ORGANIZE", tone: "lavender", parent: 1 },
  { id: 3, x: 50, y: 63, label: "Pick a direction", detail: "DECIDE", tone: "peach", parent: 2 },
];
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const arrows: Record<string, Point> = {
  ArrowLeft: { x: -2, y: 0 }, ArrowRight: { x: 2, y: 0 }, ArrowUp: { x: 0, y: -2 }, ArrowDown: { x: 0, y: 2 },
};

export function Whiteboard({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const localizeNodes = () => seedNodes.map(node => ({ ...node, label: t(node.label), detail: t(node.detail) }));
  const [nodes, setNodes] = useState(localizeNodes);
  const [selected, setSelected] = useState<number>();
  const [showLinks, setShowLinks] = useState(true);
  const canvas = useRef<HTMLDivElement>(null);
  const drag = useRef<{ id: number; pointer: number; offset: Point } | null>(null);
  const selectedNode = nodes.find(node => node.id === selected);

  function position(event: PointerEvent<HTMLButtonElement>) {
    const rect = canvas.current!.getBoundingClientRect();
    return { x: (event.clientX - rect.left) / rect.width * 100, y: (event.clientY - rect.top) / rect.height * 100 };
  }

  function move(id: number, point: Point) {
    setNodes(items => items.map(node => node.id === id
      ? { ...node, x: clamp(point.x, 22, 78), y: clamp(point.y, 14, 86) }
      : node));
  }

  function start(event: PointerEvent<HTMLButtonElement>, node: Node) {
    if (event.button !== 0 || !event.isPrimary) return;
    const point = position(event);
    drag.current = { id: node.id, pointer: event.pointerId, offset: { x: node.x - point.x, y: node.y - point.y } };
    setSelected(node.id);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function dragNode(event: PointerEvent<HTMLButtonElement>) {
    const active = drag.current;
    if (!active || active.pointer !== event.pointerId) return;
    const point = position(event);
    move(active.id, { x: point.x + active.offset.x, y: point.y + active.offset.y });
  }

  function stop(event: PointerEvent<HTMLButtonElement>) {
    if (drag.current?.pointer === event.pointerId) drag.current = null;
  }

  function nudge(event: KeyboardEvent<HTMLButtonElement>, node: Node) {
    const delta = arrows[event.key];
    if (!delta) return;
    event.preventDefault();
    setSelected(node.id);
    move(node.id, { x: node.x + delta.x, y: node.y + delta.y });
  }

  function addNode() {
    const id = Math.max(...nodes.map(node => node.id)) + 1;
    setNodes([...nodes, {
      id, x: id % 2 === 0 ? 25 : 75, y: id === 4 ? 81 : 42 + ((id * 11) % 40),
      label: t("Idea {n}").replace("{n}", String(id - 3)), detail: t("NEW NOTE"), tone: "blue", parent: selected,
    }]);
    setSelected(id);
  }

  return <div className="workspace-container"><section className="workspace board" aria-label={t("Fieldwork Board")}>
    <header className="workspace-header"><span className="workspace-symbol" aria-hidden="true">◇</span>
      <div><strong>{t("Fieldwork Board")}</strong><small>{t("STUDIO / PROJECT MAP")}</small></div><span className="workspace-tag">{t("IDEATION")}</span>
    </header>
    <div className="board-layout">
      <div className="board-tools" role="group" aria-label={t("Board tools")}>
        <button className="tool add-note" aria-label={t("Add note")} title={t("Add note")} onClick={addNode}><span aria-hidden="true">＋</span> <span className="board-tool-label">{t("Add note")}</span></button>
        <button className="tool wide-tool" aria-label={t("Connections")} title={t("Connections")} aria-pressed={showLinks} onClick={() => setShowLinks(!showLinks)}><span aria-hidden="true">⌁</span> <span className="board-tool-label">{t("Connections")}</span></button>
        <button className="tool wide-tool" aria-label={t("Reset board")} title={t("Reset board")} onClick={() => { setNodes(localizeNodes()); setSelected(undefined); setShowLinks(true); }}><span aria-hidden="true">↺</span> <span className="board-tool-label">{t("Reset board")}</span></button>
      </div>
      <div className="board-canvas" ref={canvas}>
        {showLinks && <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="connections" aria-hidden="true">
          {nodes.map(node => {
            const from = nodes.find(item => item.id === node.parent);
            return from && <path key={node.id} d={`M ${from.x} ${from.y} C ${from.x} ${node.y}, ${node.x} ${from.y}, ${node.x} ${node.y}`} vectorEffect="non-scaling-stroke" />;
          })}
        </svg>}
        {nodes.map(node => <button key={node.id} className={`board-node ${node.tone}`} style={{ left: `${node.x}%`, top: `${node.y}%` }}
          aria-pressed={selected === node.id} aria-keyshortcuts="ArrowUp ArrowDown ArrowLeft ArrowRight"
          onClick={() => setSelected(node.id)} onKeyDown={event => nudge(event, node)}
          onPointerDown={event => start(event, node)} onPointerMove={dragNode}
          onPointerUp={stop} onPointerCancel={stop} onLostPointerCapture={stop}>
          <small>{node.detail}</small><strong>{node.label}</strong>
        </button>)}
      </div>
      <aside className="board-inspector"><p className="workspace-kicker">{t("INSPECTOR")}</p>
        {selectedNode ? <label>{t("Note title")}<input value={selectedNode.label} maxLength={36}
          onChange={event => setNodes(nodes.map(node => node.id === selected ? { ...node, label: event.target.value } : node))} /></label>
          : <p>{t("Select a note to edit its title.")}</p>}
      </aside>
    </div>
    <footer className="workspace-footer"><span>{t("Drag notes or use arrow keys.")}</span><span aria-live="polite">{t("{n} notes").replace("{n}", String(nodes.length))}</span></footer>
  </section></div>;
}
