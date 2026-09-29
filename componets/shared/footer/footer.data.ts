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
      { label: "Featured Categories", href: "#" },
      { label: "Business", href: "#" },
      { label: "IT & Software", href: "#" },
      { label: "Design", href: "#" },
    ],
  },
  {
    id: "development",
    title: "Development",
    links: [
      { label: "Marketing", href: "#" },
      { label: "Photography", href: "#" },
      { label: "Finance", href: "#" },
      { label: "Music", href: "#" },
    ],
  },
  {
    id: "recommended-courses",
    title: "Recommended Courses",
    links: [
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Settings", href: "#" },
];
