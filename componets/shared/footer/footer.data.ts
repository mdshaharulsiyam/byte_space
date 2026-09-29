export interface FooterNavGroup {
  id: string;
  title: string;
  links: { label: string; href: string }[];
}

export const footerNavGroups: FooterNavGroup[] = [
  {
    id: "featured-courses",
    title: "Featured Courses",
    links: [
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/categories/business" },
      { label: "IT & Software", href: "/categories/it-software" },
      { label: "Design", href: "/categories/design" },
    ],
  },
  {
    id: "development",
    title: "Development",
    links: [
      { label: "Marketing", href: "/categories/marketing" },
      { label: "Photography", href: "/categories/photography" },
      { label: "Finance", href: "/categories/finance" },
      { label: "Music", href: "/categories/music" },
    ],
  },
  {
    id: "recommended-courses",
    title: "Recommended Courses",
    links: [
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Settings", href: "/cookies" },
];
