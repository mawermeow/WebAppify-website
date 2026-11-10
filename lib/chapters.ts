import type { Locale } from "./locales";

export type Chapter = { title: string; deck: string; paragraphs: readonly string[] };

const chapters = [
  {
    title: "The quiet hour",
    deck: "On leaving a little room for attention.",
    paragraphs: [
      "The first ferry leaves before the bakery opens. From the edge of the harbor I watch it make a bright incision in the water. For a minute there is a line between here and there, clear enough to follow with a finger. Then the wake folds into itself and the water is simply water again.",
      "I had brought a notebook to record the morning, but I left it closed. There was a pale stripe under the clouds and a gull turning in place above the breakwater. I wanted to see what I would remember if I let the hour pass without trying to keep it.",
      "By noon, the details had already begun to move. I could no longer say which direction the gull faced. But I remembered the distance between the ferry and its wake, and how the space looked empty until I paid attention.",
    ],
  },
  {
    title: "A map of small things",
    deck: "What a familiar street can still tell you.",
    paragraphs: [
      "I drew the neighborhood from memory, beginning with the routes I could walk in the dark. The corner store was too large, the park a slender rectangle. The streets narrowed wherever I had a reason to hurry.",
      "On a second sheet I drew only things that made me stop. There was a loose tile that rang under a shoe and a lemon tree that leaned over a fence. By the time I reached the park, I had forgotten where the streets were meant to go.",
      "The maps disagreed about nearly everything. I kept both on the kitchen table, where one could tell me how to get home and the other could tell me why I sometimes took the long way.",
    ],
  },
  {
    title: "The way back",
    deck: "A last note from the harbor.",
    paragraphs: [
      "On the way home I found a ferry ticket in my pocket, creased where it had been folded against a key. The ink had rubbed away from the time but the paper still held a faint blue border.",
      "I put it inside the notebook. It marked an empty page, which seemed right for a morning that had felt better without a record. There would be time to write about the next one, if I felt like it.",
    ],
  },
];

export const localizedChapters: Record<Locale, readonly Chapter[]> = {
  en: chapters,
  "zh-TW": [
    {
      title: "寧靜的一小時",
      deck: "留一點空間，好好留意眼前的事物。",
      paragraphs: [
        "第一班渡輪在麵包店開門前就出發了。我站在港邊，看它在水面劃開一道明亮的線。短短一分鐘，這裡和那裡之間有了一條清楚得能用手指描過的線。然後尾流漸漸合攏，水面又只是水面。",
        "我帶了筆記本，原想記下這個早晨，卻始終沒有翻開。雲層下有一道淡淡的光，一隻海鷗在防波堤上方盤旋。我想知道，如果任由這一小時過去，不刻意留住它，我會記得什麼。",
        "到了中午，細節已經開始變得模糊。我說不出海鷗朝著哪個方向，卻記得渡輪和尾流之間的距離，也記得那片看似空無一物的水面，是在我仔細看時才有了模樣。",
      ],
    },
    {
      title: "小事物的地圖",
      deck: "熟悉的街道，仍然有話要說。",
      paragraphs: [
        "我憑記憶畫下住家附近的街區，先畫那些摸黑也能走的路。街角商店畫得太大，公園成了細長的矩形。凡是我有理由加快腳步的地方，街道都變窄了。",
        "在第二張紙上，我只畫那些讓我停下來的事物。一塊踩上去會響的鬆動地磚，還有一棵枝幹探出籬笆的檸檬樹。畫到公園時，我已經忘了那些街道本來通往哪裡。",
        "兩張地圖幾乎處處不同。我把它們都留在廚房桌上。一張告訴我怎麼回家，另一張則告訴我，為什麼有時候我會繞遠路。",
      ],
    },
    {
      title: "回程",
      deck: "來自港邊的最後一則筆記。",
      paragraphs: [
        "回家路上，我在口袋裡找到一張渡輪票，被鑰匙壓出一道摺痕。印著時間的墨跡已經磨掉了，紙邊還留著淡藍色的框線。",
        "我把票夾進筆記本，正好標記了一頁空白。那個早晨沒留下紀錄，反而更自在，這樣很合適。下個早晨如果想寫，再寫也來得及。",
      ],
    },
  ],
  ja: [
    {
      title: "静かな一時間",
      deck: "目の前のものに気づくための、ほんの少しの余白。",
      paragraphs: [
        "パン屋が開く前に、始発のフェリーが出る。港の端に立っていると、船が水面に明るい切れ目を入れていくのが見えた。ほんの一分ほど、ここからあそこまで、指でなぞれそうなほどはっきりと線が伸びる。やがて引き波は折り重なり、水面はただの水面に戻った。",
        "朝のことを書き留めようとノートを持ってきたが、開かずにいた。雲の下に淡い光の帯があり、防波堤の上ではカモメが旋回していた。この一時間を留めようとせずに見送ったら、何が記憶に残るだろうと思った。",
        "昼には、細かな記憶はもう形を変え始めていた。カモメがどちらを向いていたかは思い出せない。それでも、フェリーと引き波のあいだの距離は覚えていた。目を凝らすまでは、そこには何もないように見えていた。",
      ],
    },
    {
      title: "小さなものの地図",
      deck: "見慣れた通りが、まだ教えてくれること。",
      paragraphs: [
        "近所の地図を記憶だけで描いた。暗がりでも歩ける道から始めた。角の店は大きすぎ、公園は細長い長方形になった。急ぐ理由のある場所では、どの道も狭くなった。",
        "二枚目には、足を止めたものだけを描いた。踏むと音が鳴る浮いたタイルや、塀の向こうに枝を伸ばすレモンの木。公園まで来たころには、道がどこに続くのか忘れていた。",
        "二枚の地図はほとんど何もかも違っていた。どちらも台所のテーブルに置いた。一枚は帰り道を教えてくれ、もう一枚は、なぜときどき遠回りするのかを教えてくれる。",
      ],
    },
    {
      title: "帰り道",
      deck: "港からの最後の覚え書き。",
      paragraphs: [
        "帰り道、ポケットにフェリーの切符が入っているのに気づいた。鍵に押されて折り目がつき、時刻の印字はすり切れていたが、紙には薄い青の縁取りが残っていた。",
        "切符をノートに挟んだ。しおりになった先は白紙のページだった。記録を残さずに過ごすほうが心地よかった朝には、それでよかった。次の朝のことは、書きたくなったら書けばいい。",
      ],
    },
  ],
  ko: [
    {
      title: "고요한 한 시간",
      deck: "눈앞의 것에 마음을 둘 작은 여유.",
      paragraphs: [
        "첫 여객선은 빵집이 문을 열기 전에 떠난다. 항구 끝에 서서 배가 물 위에 밝은 자국을 내는 모습을 보았다. 잠깐 동안 여기와 저기 사이에 손가락으로 따라 그릴 수 있을 만큼 선명한 선이 생겼다. 이윽고 물결은 접혀 들어가고, 수면은 다시 평소의 수면이 되었다.",
        "아침을 기록하려고 노트를 가져왔지만 펼치지 않았다. 구름 아래 희미한 빛이 길게 드리웠고, 방파제 위로 갈매기 한 마리가 맴돌았다. 이 한 시간을 붙잡지 않고 흘려보내면 무엇이 기억에 남을지 궁금했다.",
        "정오가 되자 세부적인 기억은 벌써 달라지기 시작했다. 갈매기가 어느 쪽을 보고 있었는지는 떠오르지 않았다. 하지만 배와 물결 사이의 거리는 기억했다. 유심히 보기 전까지 그곳은 텅 비어 보였다.",
      ],
    },
    {
      title: "작은 것들의 지도",
      deck: "익숙한 거리에서 여전히 발견할 수 있는 것.",
      paragraphs: [
        "기억을 더듬어 동네 지도를 그렸다. 어둠 속에서도 걸을 수 있는 길부터 그렸다. 모퉁이 가게는 너무 컸고 공원은 가느다란 직사각형이 되었다. 서두를 이유가 있는 곳마다 길이 좁아졌다.",
        "두 번째 종이에는 나를 멈춰 세운 것들만 그렸다. 밟으면 소리가 나는 헐거운 타일, 담장 너머로 가지를 내민 레몬 나무. 공원에 다다랐을 때는 길이 어디로 이어지는지 잊고 말았다.",
        "두 지도는 거의 모든 것이 달랐다. 둘 다 부엌 식탁 위에 놓아 두었다. 하나는 집에 가는 길을 알려 주고, 다른 하나는 내가 가끔 먼 길로 돌아가는 이유를 알려 준다.",
      ],
    },
    {
      title: "돌아오는 길",
      deck: "항구에서 가져온 마지막 기록.",
      paragraphs: [
        "집으로 돌아오는 길에 주머니에서 여객선 표 한 장을 발견했다. 열쇠에 눌려 접힌 자국이 나 있었다. 시간은 잉크가 닳아 보이지 않았지만 종이에는 연한 파란색 테두리가 남아 있었다.",
        "표를 노트에 끼웠다. 빈 페이지에 표시가 생겼다. 기록 없이 보내서 더 좋았던 아침에 어울리는 자리였다. 다음 아침은 쓰고 싶어질 때 쓰면 된다.",
      ],
    },
  ],
};
