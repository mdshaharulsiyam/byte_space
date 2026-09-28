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
  { name: "Courses", href: "/courses" },
  { name: "About Us", href: "/about" },
];

export default function Navbar({ className = "" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`w-full bg-primary text-white relative border-b border-white/[0.12] overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 flex items-center justify-between h-[96px] md:h-[120px]">
        <Link
          href="/"
          className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg"
          aria-label="ByteSpace Home"
        >
          <Image
            src={logo}
            alt="ByteSpace Logo"
            width={29}
            height={32}
            className="w-[29px] h-[32px] object-contain"
            priority
          />
          <span className="font-clash font-bold text-[24px] leading-none text-white tracking-normal select-none">
            ByteSpace
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body font-medium text-[16px] transition-colors duration-200 ${
                  isActive
                    ? "text-secondary font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className="font-body font-medium text-[16px] text-white hover:text-secondary transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link href="/register" className="btn-primary">
            Register
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-white hover:text-secondary hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary cursor-pointer"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden relative z-10 border-t border-white/[0.12] bg-primary px-5 py-6 space-y-5 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-body font-medium text-[18px] py-1 transition-colors ${
                    isActive
                      ? "text-secondary font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-white/[0.12] flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center font-body font-medium text-[16px] text-white hover:text-secondary py-2.5 rounded-full border border-white/20 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full text-center"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
