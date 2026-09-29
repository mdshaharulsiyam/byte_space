import Image from "next/image";
import Link from "next/link";
import { LearningPath } from "./learning-paths.data";

interface LearningPathCardProps {
  item: LearningPath;
}

export default function LearningPathCard({ item }: LearningPathCardProps) {
  const content = (
    <div className="group w-full aspect-square bg-white rounded-3xl border border-zinc-200/80 p-5 sm:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:border-zinc-300">
      <div className="relative w-14 h-14 sm:w-[60px] sm:h-[60px] shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={item.icon}
          alt={item.title}
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="font-heading font-semibold text-zinc-900 text-[15px] sm:text-[16px] md:text-[17px] mt-4 tracking-tight transition-colors duration-200 group-hover:text-[#003be2]">
        {item.title}
      </h3>
    </div>
  );

  if (item.href) {
    return (
      <Link href={item.href} className="block w-full">
        {content}
      </Link>
    );
  }

  return content;
}
