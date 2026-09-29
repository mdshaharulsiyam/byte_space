"use client";

import { motion } from "framer-motion";

interface CategoryFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilters({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-8 max-w-[940px]">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const isMore = category === "+ More";

        return (
          <motion.button
            key={category}
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onSelectCategory(category)}
            className={`px-4 sm:px-5 py-2 rounded-full font-body text-[13px] sm:text-[14px] transition-colors duration-200 cursor-pointer ${
              isActive
                ? "bg-[#d4fb20] text-zinc-900 font-semibold"
                : isMore
                ? "bg-transparent text-[#003be2] font-semibold hover:underline"
                : "bg-[#f4f4f5] text-zinc-600 font-medium hover:bg-zinc-200"
            }`}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}
