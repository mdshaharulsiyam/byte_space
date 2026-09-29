"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/assets";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col items-start max-w-[500px]">
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <Image
          src={logo}
          alt="ByteSpace"
          width={28}
          height={30}
          className="w-7 h-[30px] object-contain"
        />
        <span className="font-clash font-bold text-[22px] leading-none text-zinc-900 select-none">
          ByteSpace
        </span>
      </Link>

      <p className="font-body text-zinc-600 text-[15px] sm:text-[16px] leading-relaxed mt-5">
        Stay up to date with the latest courses and news from ByteSpace
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-5 py-3 rounded-full border border-zinc-300 focus:outline-none focus:border-[#003be2] text-sm text-zinc-800 placeholder:text-zinc-400 bg-white transition-all shadow-xs"
        />
        <button
          type="submit"
          className="px-7 py-3 rounded-full bg-secondary hover:bg-secondary-hover text-zinc-900 font-heading font-medium text-sm transition-all duration-200 cursor-pointer shadow-xs hover:-translate-y-0.5 active:translate-y-0 shrink-0 text-center"
        >
          {submitted ? "Subscribed!" : "Subscribe"}
        </button>
      </form>

      <p className="font-body text-zinc-400 text-xs mt-3 leading-relaxed">
        By subscribing you agree with our{" "}
        <Link
          href="#"
          className="underline hover:text-zinc-600 transition-colors"
        >
          Privacy Policy
        </Link>{" "}
        and provide consent to receive updates from our company.
      </p>
    </div>
  );
}
