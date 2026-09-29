import Image from "next/image";
import {
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
} from "@/assets";

const AVATARS = [
  { src: student1, alt: "Happy student 1" },
  { src: student2, alt: "Happy student 2" },
  { src: student3, alt: "Happy student 3" },
  { src: student4, alt: "Happy student 4" },
  { src: student5, alt: "Happy student 5" },
  { src: student6, alt: "Happy student 6" },
];

export default function CardHappyStudents() {
  return (
    <div
      className="bg-white flex flex-col justify-between"
      style={{
        borderRadius: 16,
        padding: "14px 16px",
        width: 258,
        minHeight: 121,
        boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
        gap: 10,
      }}
    >
      <div className="flex flex-col gap-0.5">
        <p
          className="font-body font-semibold text-zinc-900 leading-tight"
          style={{ fontSize: 15 }}
        >
          Happy Students
        </p>
        <div className="flex items-center gap-1">
          <span
            className="font-body font-medium text-zinc-700 leading-tight"
            style={{ fontSize: 12 }}
          >
            4.5 (240)
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5C518" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex">
          {AVATARS.map((avatar, i) => (
            <div
              key={i}
              className="rounded-full border-2 border-white shrink-0 overflow-hidden"
              style={{
                width: 36,
                height: 36,
                marginLeft: i === 0 ? 0 : -10,
                position: "relative",
                zIndex: AVATARS.length - i,
              }}
            >
              <Image
                src={avatar.src}
                alt={avatar.alt}
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-center font-body font-bold text-zinc-900 rounded-full shrink-0"
          style={{
            width: 44,
            height: 44,
            backgroundColor: "#cbfc01",
            fontSize: 12,
            marginLeft: 8,
          }}
        >
          2K+
        </div>
      </div>
    </div>
  );
}
