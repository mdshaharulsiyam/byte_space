"use client";

import { motion } from "framer-motion";
import { MANAGE_FEATURES, FeatureItem } from "./manage-courses.data";

interface ManageCoursesFeaturesProps {
  features?: FeatureItem[];
}

export default function ManageCoursesFeatures({
  features = MANAGE_FEATURES,
}: ManageCoursesFeaturesProps) {
  return (
    <ul className="flex flex-col gap-4 sm:gap-5 pt-2">
      {features.map((feature, i) => (
        <motion.li
          key={feature.id}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <div className="w-5 h-5 rounded-full bg-[#003be2] flex items-center justify-center shrink-0">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="font-heading font-medium text-zinc-800 text-[15px] sm:text-[16px] tracking-tight">
            {feature.title}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}
