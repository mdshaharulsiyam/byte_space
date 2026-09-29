"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TestimonialItem } from "./testimonials.data";

interface TestimonialCardProps {
  item: TestimonialItem;
  index?: number;
}

export default function TestimonialCard({ item, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.12,
        ease: "easeOut",
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="bg-white rounded-3xl p-7 sm:p-8 border border-zinc-200/80 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
    >
      <div>
        <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 relative bg-zinc-100 mb-6">
          <Image
            src={item.avatar}
            alt={item.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="font-heading font-bold text-zinc-900 text-lg sm:text-xl">
            {item.name}
          </h3>
          <p className="font-body font-medium text-[#003be2] text-sm mt-1">
            {item.role}
          </p>
        </div>

        <p className="font-body text-zinc-600 text-[15px] sm:text-[15.5px] leading-[1.75] mt-6">
          {item.quote}
        </p>
      </div>
    </motion.div>
  );
}
