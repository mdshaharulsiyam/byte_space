"use client";

import { motion } from "framer-motion";

export default function CardLearningProgress() {
  const progress = 55;

  return (
    <div
      className="bg-white flex flex-col justify-between"
      style={{
        borderRadius: 16,
        padding: "14px 16px 14px 16px",
        width: 232,
        minHeight: 131,
        boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
        gap: 6,
      }}
    >
      <p
        className="font-body font-medium text-zinc-500 leading-tight"
        style={{ fontSize: 12 }}
      >
        Learning Progress
      </p>

      <p
        className="font-body font-bold text-zinc-900 leading-none"
        style={{ fontSize: 42 }}
      >
        {progress}%
      </p>

      <div
        className="w-full rounded-full overflow-hidden"
        style={{ height: 8, backgroundColor: "#e5e7eb" }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          style={{
            backgroundColor: "#cbfc01",
          }}
        />
      </div>
    </div>
  );
}
