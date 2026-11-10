# WebAppify iOS product specification

Based on a read-only review of the adjacent Swift checkout. Findings describe the source, with device behavior to be verified separately.

| Area | Verified implementation | Source |
| --- | --- | --- |
| Creation and management | The library creates, edits, opens and deletes saved profiles. A profile has a name, address, optional icon, display preferences and link behavior. The editor accepts a bare host and normalizes it to HTTPS. Profile import/export and shortcut links are available. | `Features/Library/ProfileLibrary.swift`, `Features/Editor/ProfileEditor.swift`, `Domain/ProfileValidation.swift` |
| Display preferences | Auto, Mobile and Desktop map to WebKit’s recommended, mobile and desktop content modes. Desktop can optionally set a main-frame layout viewport width of 320–2560 CSS pixels. | `Infrastructure/WebConfiguration.swift`, `Domain/ProfileValidation.swift` |
| User-Agent | A desktop profile can override the UA. Otherwise WebKit selects it. The custom viewport and UA are separate controls. | `Infrastructure/WebConfiguration.swift`, `Features/Viewer/BrowserSession.swift` |
| Persistence | Profiles are stored locally in SwiftData with CloudKit disabled. WebKit website data normally uses a persistent store keyed by profile UUID. Temporary compatibility sessions use a nonpersistent store and request mobile mode. | `Data/ProfileStore.swift`, `Infrastructure/WebConfiguration.swift`, `Features/Viewer/BrowserSession.swift` |
| Opening and navigation | Opening a profile loads its URL into the in-app WKWebView. Toolbar visibility and edge extension are configurable. Same-host HTTP(S) navigation stays in the viewer. Cross-host top-level links can stay inside, open via iOS, or ask first. New-window navigation uses the existing viewer. Back, forward and reload are available. | `Features/Viewer/WebViewer.swift`, `Features/Viewer/BrowserSession.swift`, `Domain/NavigationPolicy.swift` |

The site can demonstrate a library of personalized site profiles, a focused in-app viewer, and per-site display and link preferences. The viewer is inside WebAppify. Websites determine which layouts, authentication flows and capabilities are available. A desktop preference or custom viewport cannot grant third-party permissions, and sites may behave differently in WKWebView. Safari can also request desktop sites, and a PWA’s layout depends on its implementation and viewport.

The real demos respond to the CSS layout viewport. Changing the UA alone need not change their layout. For iPhone verification, compare Mobile and Desktop with a custom desktop width of 1024 CSS pixels, then record both the viewport measurements and the visible layout. UserScripts, extensions and filtering exist in the source and are outside the launch messaging.
