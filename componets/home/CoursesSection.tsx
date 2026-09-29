"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CategoryFilters,
  CourseCard,
  CATEGORIES,
  COURSES,
} from "./courses";

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-[820px] mx-auto mb-10 md:mb-12"
        >
          <h2 className="font-heading font-bold text-zinc-900 text-3xl sm:text-4xl md:text-[44px] leading-[1.2] tracking-tight">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>

          <p className="font-body font-normal text-zinc-500 text-[14px] sm:text-[16px] max-w-[680px] mt-4 leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>

          <CategoryFilters
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {COURSES.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
