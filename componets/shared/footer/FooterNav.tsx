import Link from "next/link";
import { footerNavGroups } from "./footer.data";

export default function FooterNav() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full">
      {footerNavGroups.map((group) => (
        <div key={group.id} className="flex flex-col">
          <h3 className="font-heading font-semibold text-zinc-900 text-[15px] sm:text-[16px] tracking-tight mb-4 sm:mb-5">
            {group.title}
          </h3>
          <ul className="space-y-3 sm:space-y-3.5">
            {group.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-zinc-500 hover:text-zinc-900 text-[14px] sm:text-[15px] transition-colors duration-200 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
