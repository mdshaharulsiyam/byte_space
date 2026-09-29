import Image from "next/image";
import { registerIllustration } from "@/assets";

export default function LoginLeftBanner() {
  return (
    <div className="flex flex-col items-start w-full max-w-[495px]">
      <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-[40px] leading-[1.15] tracking-tight mb-3">
        Sign in with ease
      </h2>
      <p className="font-body font-normal text-white/85 text-[15px] sm:text-[16px] leading-[1.6] mb-8 lg:mb-[68px]">
        Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
      </p>
      <div className="w-full flex items-center justify-start">
        <Image
          src={registerIllustration}
          alt="ByteSpace interactive learning courses and analytics"
          width={495}
          height={557}
          className="w-full max-w-[495px] h-auto object-contain select-none pointer-events-none drop-shadow-xl"
          priority
        />
      </div>
    </div>
  );
}
