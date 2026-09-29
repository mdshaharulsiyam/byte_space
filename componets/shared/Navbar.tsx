"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logo } from "@/assets";

interface NavbarProps {
  className?: string;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "#" },
  { name: "Creators", href: "#" },
];

export default function Navbar({ className = "" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`w-full bg-primary text-white relative ${className}`}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 flex items-center h-[80px] md:h-[96px]">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg"
          aria-label="ByteSpace Home"
        >
          <Image
            src={logo}
            alt="ByteSpace"
            width={28}
            height={30}
            className="w-7 h-[30px] object-contain"
            priority
          />
          <span className="font-clash font-bold text-[22px] leading-none text-white select-none">
            ByteSpace
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = link.href !== "#" && pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body text-[15px] transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-white"
                    : "font-medium text-white/60 hover:text-white/90"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Link
            href="/login"
            className="font-body font-medium text-[15px] text-white/70 hover:text-white transition-colors duration-200"
          >
            Sign In
          </Link>

          <span
            className="block w-px h-[16px] bg-white/25 shrink-0"
            aria-hidden="true"
          />

          <Link
            href="/register"
            className="font-body font-medium text-[15px] text-white/70 hover:text-white transition-colors duration-200"
          >
            Join Us
          </Link>

          <button
            type="button"
            className="ml-1 text-white/70 hover:text-white transition-colors cursor-pointer p-1"
            aria-label="Cart"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary cursor-pointer ml-auto"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden relative z-10 px-5 py-6 space-y-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", background: "#003be2" }}
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = link.href !== "#" && pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-body text-[17px] py-1 transition-colors ${
                    isActive
                      ? "font-semibold text-white"
                      : "font-medium text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div
            className="pt-4 flex items-center justify-between"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body font-medium text-[15px] text-white/70 hover:text-white"
              >
                Sign In
              </Link>
              <span className="block w-px h-4 bg-white/25" aria-hidden="true" />
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body font-medium text-[15px] text-white/70 hover:text-white"
              >
                Join Us
              </Link>
            </div>
            <button
              type="button"
              className="text-white/70 hover:text-white p-1 cursor-pointer"
              aria-label="Cart"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
