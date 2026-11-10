import { pageSlugs } from "@/lib/routes";
import { pageMetadata, SitePage } from "@/views/SitePage";

type Props = { params: Promise<{ slug?: string[] }> };
export const dynamicParams = false;
export const generateStaticParams = pageSlugs;

export async function generateMetadata({ params }: Props) {
  return pageMetadata("en", (await params).slug);
}

export default async function EnglishPage({ params }: Props) {
  return <SitePage locale="en" slug={(await params).slug} />;
}
