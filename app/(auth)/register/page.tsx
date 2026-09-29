import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RegisterCard, RegisterLeftBanner } from "@/componets/auth";
import { brandLogo } from "@/assets";

export const metadata: Metadata = {
  title: "Register - ByteSpace",
  description:
    "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
};

export default function RegisterPage() {
  return (
    <div className="w-full max-w-[1440px] min-h-screen mx-auto px-6 sm:px-10 lg:px-[122px] flex flex-col justify-between pb-8 lg:pb-[121px]">
      <header className="w-full pt-9 pb-10 lg:pb-[46px]">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-transform hover:scale-105"
          aria-label="ByteSpace Home"
        >
          <Image
            src={brandLogo}
            alt="ByteSpace"
            width={29}
            height={32}
            className="w-[29px] h-auto object-contain"
            priority
          />
        </Link>
      </header>

      <main className="w-full flex-1">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          <div className="w-full lg:max-w-[495px] hidden lg:block">
            <RegisterLeftBanner />
          </div>
          <div className="w-full lg:max-w-[577px] flex justify-center lg:justify-end">
            <RegisterCard />
          </div>
        </div>
      </main>
    </div>
  );
}
