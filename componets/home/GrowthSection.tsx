"use client";

import { motion } from "framer-motion";
import { GrowthIllustration, GrowthStats } from "./growth";

export default function GrowthSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-[#f8fbee] via-[#fafbf7] to-[#eff3fc]">
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none rounded-full blur-3xl opacity-40"
        style={{
          background: "radial-gradient(circle, #d4fb20 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/4 right-0 w-[550px] h-[550px] pointer-events-none rounded-full blur-3xl opacity-35"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-14 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start text-left max-w-[560px]"
          >
            <h2 className="font-heading font-bold text-zinc-900 text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] leading-[1.18] tracking-tight">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="font-body text-zinc-500 text-[15px] sm:text-[16px] leading-relaxed mt-6 max-w-[490px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you need.
            </p>

            <div className="mt-10 sm:mt-12 w-full">
              <GrowthStats />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex items-center justify-center lg:justify-end"
          >
            <GrowthIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
