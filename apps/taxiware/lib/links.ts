export const sectionLinks = [
	{ href: "/#ablauf", label: "So geht’s" },
	{ href: "/#preise", label: "Preise" },
	{ href: "/#vergleich", label: "TaxiWare oder PTAS" },
	{ href: "/#faq", label: "FAQ" },
] as const;

/**
 * There is no form for trials and callbacks yet, so every call to action
 * leads to the closing CTA in the footer (as in the design prototype).
 */
export const ctaHref = "/#kontakt";

/** Login and legal pages don't exist yet; these are their planned paths. */
export const pendingLinks = {
	datenschutz: "/datenschutz",
	impressum: "/impressum",
	login: "/login",
} as const;
