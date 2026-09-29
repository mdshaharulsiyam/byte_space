import Link from "next/link";
import { legalLinks } from "./footer.data";

export default function FooterBottom() {
  return (
    <div className="border-t border-zinc-200 mt-14 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 pb-10 sm:pb-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-body text-zinc-500 text-sm text-center md:text-left">
        &copy; 2024 ByteSpace. All rights reserved.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        {legalLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-body text-zinc-500 hover:text-zinc-900 text-sm transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
