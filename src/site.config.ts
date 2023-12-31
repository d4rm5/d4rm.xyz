import type { SiteConfig } from "@/data/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Dante Martínez",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "d4rm.xyz",
	// Meta property used as the default description meta property
	description: "d4rm.xyz website",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "es-AR",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "es_AR",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "es-AR",
		options: {
			day: "numeric",
			month: "numeric",
			year: "numeric",
		},
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Blog",
		path: "/posts/",
	},
	{
		title: "Configs",
		path: "/configs/",
	},
];
