export const title = "WebAppify";
export const description = "Turn your favorite websites into personal web apps and choose how they open on your iPhone.";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || undefined;
export const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL || undefined;

export const demos = [
  { id: "whiteboard", index: "01", title: "Creative Workspace", subtitle: "Fieldwork Board", description: "Map an idea from first spark to next steps on an interactive canvas." },
  { id: "reader", index: "02", title: "Reading Workspace", subtitle: "Field Notes", description: "Settle into an original short read and tune the page to your liking." },
] as const;
