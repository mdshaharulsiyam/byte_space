"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginCard() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password) {
      setError("Please fill in all required fields.");
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
          Sign In
        </span>
        <h1 className="font-heading font-bold text-zinc-900 text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
          Welcome Back
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
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </div>

        <div className="relative flex items-center justify-center my-6 sm:my-8">
          <div className="w-full border-t border-zinc-200" />
          <span className="absolute px-3.5 bg-white text-zinc-400 font-body text-[14px]">
            or
          </span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Sign in with Facebook"
            className="w-[58px] h-[54px] rounded-[16px] border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 active:scale-95 flex items-center justify-center text-zinc-900 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Sign in with Google"
            className="w-[58px] h-[54px] rounded-[16px] border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 active:scale-95 flex items-center justify-center text-zinc-900 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
          </button>
        </div>
      </form>

      <div className="text-center pt-4 lg:pt-0">
        <p className="font-body text-[14px] sm:text-[15px] text-zinc-500">
          New user?{" "}
          <Link
            href="/register"
            className="text-primary hover:underline font-medium"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
