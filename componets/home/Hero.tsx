"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
          className="absolute pointer-events-none opacity-40 sm:opacity-80 md:opacity-100"
          style={{
            top: "clamp(40px, 12vw, 170px)",
            left: "clamp(-100px, -6vw, -40px)",
            width: "clamp(120px, 24vw, 385px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
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
          </motion.div>
        </div>

        <div
          className="absolute pointer-events-none hidden sm:block"
          style={{
            top: "clamp(230px, 30vw, 390px)",
            left: "clamp(20px, 14vw, 210px)",
            width: "clamp(70px, 12vw, 175px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, 8, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.15 },
              scale: { duration: 0.8, delay: 0.15 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src={ornamentSquiggleWhite}
              alt=""
              width={175}
              height={175}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        <div
          className="absolute pointer-events-none opacity-30 sm:opacity-70 md:opacity-100"
          style={{
            bottom: "clamp(0px, 2vw, 24px)",
            left: "clamp(-10px, 1.2vw, 20px)",
            width: "clamp(110px, 20vw, 342px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -7, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.25 },
              scale: { duration: 0.8, delay: 0.25 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src={ornamentRingWhite}
              alt=""
              width={342}
              height={342}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        <div
          className="absolute pointer-events-none opacity-40 sm:opacity-80 md:opacity-100"
          style={{
            top: "clamp(40px, 12vw, 170px)",
            right: "clamp(-110px, -7vw, -50px)",
            width: "clamp(120px, 23vw, 370px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.1 },
              scale: { duration: 0.8, delay: 0.1 },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
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
          </motion.div>
        </div>

        <div
          className="absolute pointer-events-none hidden sm:block"
          style={{
            top: "clamp(230px, 29vw, 380px)",
            right: "clamp(24px, 14vw, 195px)",
            width: "clamp(75px, 12.5vw, 188px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, 8, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 },
              y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src={ornamentPyramidWhite}
              alt=""
              width={188}
              height={188}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        <div
          className="absolute pointer-events-none opacity-30 sm:opacity-70 md:opacity-100"
          style={{
            bottom: "clamp(0px, 2vw, 22px)",
            right: "clamp(-20px, -1vw, 0px)",
            width: "clamp(100px, 19vw, 330px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 },
              scale: { duration: 0.8, delay: 0.3 },
              y: { duration: 6.2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src={ornamentSpringWhite}
              alt=""
              width={330}
              height={330}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="container-custom relative z-40 flex flex-col items-center text-center pt-8 sm:pt-12 md:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold text-white text-[32px] sm:text-[50px] md:text-[58px] lg:text-[68px] leading-[1.12] sm:leading-[1.1] tracking-tight max-w-[820px]"
        >
          Get Access to Hundreds{" "}
          <br className="hidden sm:block" />
          Courses Available
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="font-body font-normal text-white/75 text-[14px] sm:text-[16px] md:text-[17px] max-w-[880px] mt-4 sm:mt-5 mb-7 sm:mb-9 leading-relaxed px-2 sm:px-0"
        >
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSearch}
          className="flex items-center w-full max-w-[540px] px-2 sm:px-0"
          style={{ gap: "8px" }}
        >
          <div className="flex items-center flex-1 h-[46px] sm:h-[50px] bg-white rounded-full px-3.5 sm:px-4 gap-2 shadow-sm">
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
              className="w-full bg-transparent text-zinc-800 placeholder:text-zinc-400 font-body text-[13.5px] sm:text-[14px] focus:outline-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="h-[46px] sm:h-[50px] px-5 sm:px-6 rounded-full bg-secondary hover:bg-secondary-hover text-zinc-900 font-body font-semibold text-[14px] sm:text-[15px] transition-colors duration-200 cursor-pointer shrink-0 whitespace-nowrap"
          >
            Search
          </motion.button>
        </motion.form>
      </div>

      <div
        className="relative w-full mt-6 sm:mt-8 md:mt-10 overflow-hidden h-[340px] xs:h-[370px] sm:h-[420px] md:h-[470px] lg:h-[530px] xl:h-[560px]"
      >
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%) translateY(52%)",
            width: "clamp(320px, 82vw, 1180px)",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            border: "clamp(48px, 21vw, 325px) solid #cbfc01",
          }}
          aria-hidden="true"
        />

        <div
          className="absolute left-1/2 bottom-0 pointer-events-none z-20"
          style={{
            transform: "translateX(-50%) translateY(16%)",
            width: "clamp(240px, 42vw, 600px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Image
              src={heroStudent}
              alt="ByteSpace student"
              width={578}
              height={541}
              className="w-full h-auto object-contain block"
              priority
            />
          </motion.div>
        </div>

        <div
          className="absolute z-30 pointer-events-auto origin-top-left scale-[0.68] sm:scale-[0.82] md:scale-90 lg:scale-100"
          style={{
            left: "max(10px, calc(50% - clamp(160px, 25vw, 320px)))",
            top: "clamp(12px, 5vw, 24%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
          >
            <CardTopCourses />
          </motion.div>
        </div>

        <div
          className="absolute z-30 pointer-events-auto origin-top-right scale-[0.68] sm:scale-[0.82] md:scale-90 lg:scale-100"
          style={{
            right: "max(10px, calc(50% - clamp(170px, 26vw, 353px)))",
            top: "clamp(10px, 4.5vw, 22%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
          >
            <CardLearningProgress />
          </motion.div>
        </div>

        <div
          className="absolute z-30 pointer-events-auto origin-bottom-left scale-[0.68] sm:scale-[0.82] md:scale-90 lg:scale-100"
          style={{
            left: "max(10px, calc(50% - clamp(170px, 28vw, 392px)))",
            bottom: "clamp(10px, 3vw, 8%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
          >
            <CardHappyStudents />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
