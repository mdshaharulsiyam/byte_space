"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { growthIllustration } from "@/assets";

export default function GrowthIllustration() {
  return (
    <div className="relative w-full max-w-[580px] mx-auto flex items-center justify-center">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full transition-transform duration-500 hover:scale-[1.02]"
      >
        <Image
          src={growthIllustration}
          alt="Professional growth learning courses with ByteSpace"
          width={590}
          height={615}
          className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
          priority
        />
      </motion.div>
    </div>
  );
}
