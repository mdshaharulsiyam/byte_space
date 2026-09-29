import Image, { StaticImageData } from "next/image";
import { courseAvatars } from "@/assets";

export interface Course {
  id: number;
  title: string;
  author: string;
  rating: string;
  level: string;
  image: StaticImageData;
  price: string;
  period: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-3xl p-4 border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-zinc-100"
          style={{ aspectRatio: "344 / 196" }}
        >
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="mt-4 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-heading font-bold text-zinc-900 text-[18px] leading-snug line-clamp-1">
              {course.title}
            </h3>
            <p className="font-body text-[13px] text-[#003be2] mt-0.5 font-medium">
              by {course.author}
            </p>
          </div>

          <div className="flex items-center gap-1 shrink-0 pt-0.5">
            <span className="font-body font-semibold text-zinc-700 text-[14px]">
              {course.rating}
            </span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="#b0b4ba"
              aria-hidden="true"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4f4f5] text-zinc-700 font-body text-[12px] font-medium">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            <span>{course.level}</span>
          </div>

          <Image
            src={courseAvatars}
            alt="Students enrolled"
            width={131}
            height={32}
            className="h-7 w-auto object-contain"
          />
        </div>

        <div className="flex items-baseline gap-1">
          <span className="font-heading font-bold text-[#003be2] text-[22px] leading-tight">
            {course.price}
          </span>
          <span className="font-body text-zinc-400 text-[13px]">
            {course.period}
          </span>
        </div>
      </div>
    </div>
  );
}
