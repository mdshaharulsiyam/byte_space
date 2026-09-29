import Link from "next/link";
import { CREATOR_BANNER_DATA, CreatorBannerData } from "./creator-banner.data";

interface CreatorBannerContentProps {
  data?: CreatorBannerData;
}

export default function CreatorBannerContent({
  data = CREATOR_BANNER_DATA,
}: CreatorBannerContentProps) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center max-w-[840px] mx-auto px-4 py-16 sm:py-20 md:py-24">
      <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.2] tracking-tight">
        {data.titleLine1} <br className="hidden sm:inline" />
        {data.titleLine2}
      </h2>

      <p className="font-body text-white/85 text-[13px] sm:text-[15px] leading-relaxed max-w-[760px] mx-auto mt-4 sm:mt-5">
        {data.description}
      </p>

      <div className="mt-7 sm:mt-9">
        <Link
          href={data.ctaHref}
          className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-full bg-[#cbfc01] text-zinc-950 font-heading font-semibold text-[14px] sm:text-[15px] hover:bg-[#bcf200] hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
        >
          {data.ctaText}
        </Link>
      </div>
    </div>
  );
}
