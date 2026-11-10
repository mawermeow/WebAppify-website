import { localizedPath, locales } from "./locales";

export const routes = {
  home: "/",
  demos: "/demo/",
  whiteboard: "/demo/whiteboard/",
  reader: "/demo/reader/",
  privacy: "/privacy/",
  support: "/support/",
} as const;

export type Route = keyof typeof routes;

const routeEntries = Object.entries(routes) as [Route, string][];

export function findRoute(slug?: string[]) {
  const path = slug?.length ? `/${slug.join("/")}/` : "/";
  return routeEntries.find(([, candidate]) => candidate === path)?.[0];
}

export function pageSlugs() {
  return routeEntries.map(([, path]) => ({ slug: path.split("/").filter(Boolean) }));
}

export function alternatePaths(route: Route) {
  return {
    ...Object.fromEntries(locales.map(locale => [locale, localizedPath(locale, routes[route])])),
    "x-default": routes[route],
  };
}
