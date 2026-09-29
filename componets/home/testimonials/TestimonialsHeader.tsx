"use client";

import { motion } from "framer-motion";

export default function TestimonialsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 lg:gap-12"
    >
      <div className="max-w-[480px]">
        <h2 className="font-heading font-bold text-zinc-900 text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] leading-[1.18] tracking-tight">
          Discover What Our
          <br className="hidden sm:inline" /> Community Is Saying
        </h2>
      </div>

      <div className="max-w-[560px]">
        <p className="font-body text-zinc-500 text-[15px] sm:text-[16px] leading-relaxed">
          At ByteSpace, our vibrant community of learners and creators is at the
          heart of what we do. Hear directly from those who have experienced the
          transformative journey of learning and creating on our platform.
          Explore testimonials that reflect the diverse perspectives of
          enthusiastic learners and accomplished creators.
        </p>
      </div>
    </motion.div>
  );
}
