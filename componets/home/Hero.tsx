"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  heroStudent,
  ornamentCoilLime,
  ornamentSquiggleWhite,
  ornamentRingWhite,
  ornamentCylinderLime,
  ornamentPyramidWhite,
  ornamentSpringWhite,
} from "@/assets";
import {
  CardTopCourses,
  CardLearningProgress,
  CardHappyStudents,
} from "@/componets/home/cards";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative w-full bg-primary text-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
        <div
          className="absolute pointer-events-none"
          style={{
            top: "clamp(60px, 14vw, 170px)",
            left: "clamp(-120px, -6vw, -40px)",
            width: "clamp(150px, 26vw, 385px)",
          }}
        >
          <Image
            src={ornamentCoilLime}
            alt=""
            width={385}
            height={385}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div
          className="absolute pointer-events-none"
          style={{
            top: "clamp(260px, 36vw, 460px)",
            left: "clamp(12px, 11vw, 170px)",
            width: "clamp(70px, 12vw, 175px)",
          }}
        >
          <Image
            src={ornamentSquiggleWhite}
            alt=""
            width={175}
            height={175}
            className="w-full h-auto object-contain"
          />
        </div>

        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "clamp(0px, 2vw, 24px)",
            left: "clamp(-10px, 1.2vw, 20px)",
            width: "clamp(140px, 23vw, 342px)",
          }}
        >
          <Image
            src={ornamentRingWhite}
            alt=""
            width={342}
            height={342}
            className="w-full h-auto object-contain"
          />
        </div>

        <div
          className="absolute pointer-events-none"
          style={{
            top: "clamp(60px, 14vw, 170px)",
            right: "clamp(-140px, -8vw, -50px)",
            width: "clamp(150px, 25vw, 370px)",
          }}
        >
          <Image
            src={ornamentCylinderLime}
            alt=""
            width={370}
            height={370}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div
          className="absolute pointer-events-none"
          style={{
            top: "clamp(260px, 35vw, 450px)",
            right: "clamp(16px, 9.5vw, 140px)",
            width: "clamp(75px, 12.5vw, 188px)",
          }}
        >
          <Image
            src={ornamentPyramidWhite}
            alt=""
            width={188}
            height={188}
            className="w-full h-auto object-contain"
          />
        </div>

        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "clamp(0px, 2vw, 22px)",
            right: "clamp(-20px, -1vw, 0px)",
            width: "clamp(130px, 22vw, 330px)",
          }}
        >
          <Image
            src={ornamentSpringWhite}
            alt=""
            width={330}
            height={330}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="container-custom relative z-40 flex flex-col items-center text-center pt-10 md:pt-14 lg:pt-16">
        <h1 className="font-heading font-bold text-white text-[36px] sm:text-[52px] md:text-[60px] lg:text-[68px] leading-[1.1] tracking-tight max-w-[820px]">
          Get Access to Hundreds{" "}
          <br className="hidden sm:block" />
          Courses Available
        </h1>

        <p className="font-body font-normal text-white/75 text-[15px] sm:text-[17px] max-w-[880px] mt-5 mb-9 leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          onSubmit={handleSearch}
          className="flex items-center w-full max-w-[540px]"
          style={{ gap: "10px" }}
        >
          <div className="flex items-center flex-1 h-[50px] bg-white rounded-full px-4 gap-2">
            <svg
              className="w-4 h-4 shrink-0 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-zinc-800 placeholder:text-zinc-400 font-body text-[14px] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="h-[50px] px-6 rounded-full bg-secondary hover:bg-secondary-hover text-zinc-900 font-body font-semibold text-[15px] transition-all duration-200 cursor-pointer shrink-0 active:scale-95 whitespace-nowrap"
          >
            Search
          </button>
        </form>
      </div>

      <div
        className="relative w-full mt-8 md:mt-10 overflow-hidden"
        style={{ height: "clamp(320px, 44vw, 520px)" }}
      >
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%) translateY(58%)",
            width: "clamp(560px, 90vw, 1240px)",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            border: "clamp(80px, 24vw, 340px) solid #cbfc01",
          }}
          aria-hidden="true"
        />

        <div
          className="absolute left-1/2 bottom-0 pointer-events-none z-20"
          style={{
            transform: "translateX(-50%) translateY(21%)",
            width: "clamp(260px, 44vw, 620px)",
          }}
        >
          <Image
            src={heroStudent}
            alt="ByteSpace student"
            width={578}
            height={541}
            className="w-full h-auto object-contain block"
            priority
          />
        </div>

        <div
          className="absolute z-30 transition-transform duration-300 hover:scale-[1.03]"
          style={{
            left: "clamp(8px, 12%, 195px)",
            top: "22%",
          }}
        >
          <CardTopCourses />
        </div>

        <div
          className="absolute z-30 transition-transform duration-300 hover:scale-[1.03]"
          style={{
            right: "clamp(8px, 10%, 185px)",
            top: "20%",
          }}
        >
          <CardLearningProgress />
        </div>

        <div
          className="absolute z-30 transition-transform duration-300 hover:scale-[1.03]"
          style={{
            left: "clamp(8px, 8%, 145px)",
            bottom: "8%",
          }}
        >
          <CardHappyStudents />
        </div>
      </div>
    </section>
  );
}
