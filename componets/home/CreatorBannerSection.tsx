import Image from "next/image";
import { creatorBannerBg } from "@/assets";
import { CreatorBannerContent } from "./creator-banner";

export default function CreatorBannerSection() {
  return (
    <section className="relative w-full bg-[#003be2] overflow-hidden min-h-[440px] md:min-h-[480px] flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src={creatorBannerBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="container-custom relative z-10 w-full">
        <CreatorBannerContent />
      </div>
    </section>
  );
}
