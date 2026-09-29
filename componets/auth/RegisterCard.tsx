"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterCard() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim() || !email.trim() || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1000);
  };

  return (
    <div className="w-full max-w-[577px] lg:h-[782px] min-h-[640px] flex flex-col justify-between bg-white rounded-[24px] pt-8 sm:pt-[56px] pb-8 sm:pb-[54px] px-6 sm:px-10 lg:px-[62px] shadow-2xl transition-all">
      <div>
        <span className="font-heading font-medium text-[15px] sm:text-[16px] text-primary block mb-2 sm:mb-2.5">
          Create an Account
        </span>
        <h1 className="font-heading font-bold text-zinc-900 text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
          Welcome to
          <br />
          ByteSpace
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="my-6 lg:my-0 flex flex-col">
        {error && (
          <div className="p-3 mb-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-body">
            {error}
          </div>
        )}

        <div className="mb-4 sm:mb-5">
          <label
            htmlFor="fullName"
            className="block font-body font-medium text-[14px] sm:text-[15px] text-zinc-900 mb-2"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jamie Davis"
            required
            className="w-full h-[52px] px-5 rounded-[16px] border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 font-body text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="mb-4 sm:mb-5">
          <label
            htmlFor="email"
            className="block font-body font-medium text-[14px] sm:text-[15px] text-zinc-900 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="designer@example.com"
            required
            className="w-full h-[52px] px-5 rounded-[16px] border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 font-body text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="mb-6 sm:mb-7">
          <label
            htmlFor="password"
            className="block font-body font-medium text-[14px] sm:text-[15px] text-zinc-900 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
            className="w-full h-[52px] px-5 rounded-[16px] border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 font-body text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="h-[46px] w-[124px] rounded-full bg-secondary hover:bg-secondary-hover active:scale-95 text-zinc-900 font-heading font-medium text-[16px] flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Loading..." : "Continue"}
          </button>
        </div>
      </form>

      <div className="text-center pt-4 lg:pt-0">
        <p className="font-body text-[15px] sm:text-[16px] text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
