"use client";

import { motion } from "framer-motion";
import { LearningPathCard, LEARNING_PATHS } from "./learning-paths";

export default function LearningPathsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-[840px] mx-auto mb-12 md:mb-16"
        >
          <h2 className="font-heading font-bold text-zinc-900 text-3xl sm:text-4xl md:text-[40px] leading-tight tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p className="font-body font-normal text-zinc-500 text-[14px] sm:text-[16px] max-w-[860px] mt-4 leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there&apos;s
            something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {LEARNING_PATHS.map((item, index) => (
            <LearningPathCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
