# WebAppify official website

A product site in English, Traditional Chinese, Japanese, and Korean for WebAppify, with an interactive comparison and two standalone workspaces for browsers and WKWebView. See [the product specification](docs/PRODUCT_SPEC.md) for the read-only review of the iOS source.

## Development

Use Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For environment settings, copy `.env.example` to `.env.local`. Both values are read at build time.

- `NEXT_PUBLIC_SITE_URL` is the final HTTPS origin. It populates the sitemap and absolute Open Graph URLs. Without it the sitemap is empty and robots.txt omits the sitemap link.
- `NEXT_PUBLIC_APP_STORE_URL` is the verified iPhone listing. Without it, the download section shows Coming Soon.

## Checks and static deployment

```sh
npm run typecheck
npm run lint
npm run build
python3 -m http.server 3000 --directory out
```

Publish the entire `out/` directory at the root of the chosen subdomain. Configure the static host to serve directory indexes and use `404.html` for missing pages. Use HTTPS and verify direct requests to each demo route, `robots.txt`, and `sitemap.xml`. The host only serves static files and needs no Node.js runtime.

Pushing `main` to GitHub runs `.github/workflows/pages.yml` and deploys that export to GitHub Pages. This repository is a project site, so the public URL is `https://<owner>.github.io/<repository>/`. The workflow sets `PAGES_BASE_PATH` to `/<repository>` and `NEXT_PUBLIC_SITE_URL` to that URL. Local `npm run build` leaves `PAGES_BASE_PATH` unset and still exports for the domain root. In the repository settings, set Pages to deploy from GitHub Actions. Optional repository variable `NEXT_PUBLIC_APP_STORE_URL` fills the download link at build time. For a custom domain served at the domain root, point `NEXT_PUBLIC_SITE_URL` at that origin and remove `PAGES_BASE_PATH`.

## Structure

```text
app/                      Static Next.js route groups and SEO endpoints
views/                    Shared landing, demo index, privacy, and support pages
components/               Site chrome, language menu, comparison, workspaces, diagnostics
lib/                      Site configuration, routes, locale strings, and reading content
public/                   Social share artwork
docs/PRODUCT_SPEC.md      Verified iOS behavior and launch messaging
```

## Languages

English uses the original paths at the domain root. Traditional Chinese, Japanese, and Korean use `/zh-TW/`, `/ja/`, and `/ko/`. Every language has the same page structure, such as `/ja/demo/reader/`. The language menu links to the equivalent page, and each page sets its HTML language at build time. Update `lib/messages.ts` for interface copy and `lib/chapters.ts` for reader content.

Set `NEXT_PUBLIC_SITE_URL` before deploying to include locale-specific canonical URLs, hreflang links, and sitemap alternates. The pending privacy and support pages stay out of the sitemap in all languages.

## Verify in WebAppify

1. Add the deployed `/demo/whiteboard/` and `/demo/reader/` URLs to your WebAppify library.
2. Compare Mobile with Desktop using a custom viewport width of 1024 CSS pixels. The workspace uses the available layout width and switches at 690 CSS pixels. A UA change alone can leave the layout unchanged.
3. Expand Environment diagnostics on each page to compare the UA, layout viewport, screen width, display mode, and pixel ratio. The display mode is the web platform’s reported mode.
4. Collapse diagnostics and capture App Store screenshots from the actual iPhone app. Repeat on a narrow iPhone in portrait.

The homepage’s opening modes are illustrative. The standalone routes use responsive CSS and the real environment, and workspace edits last for the current page session.

## Before launch

Confirm the official origin and App Store listing, replace the privacy and support placeholders, and remove their noindex directives and add them to the sitemap once approved. Test both demos in the shipping WebAppify build and capture the App Store screenshots.
