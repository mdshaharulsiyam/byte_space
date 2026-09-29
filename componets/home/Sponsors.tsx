import Image from "next/image";
import {
  logoipsum1,
  logoipsum2,
  logoipsum3,
  logoipsum4,
  logoipsum5,
} from "@/assets";

const SPONSORS = [
  { name: "Logoipsum 1", src: logoipsum1 },
  { name: "Logoipsum 2", src: logoipsum2 },
  { name: "Logoipsum 3", src: logoipsum3 },
  { name: "Logoipsum 4", src: logoipsum4 },
  { name: "Logoipsum 5", src: logoipsum5 },
];

export default function Sponsors() {
  return (
    <section className="w-full bg-[#f5f5f6] py-10 sm:py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:justify-between">
          {SPONSORS.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
            >
              <Image
                src={sponsor.src}
                alt={sponsor.name}
                width={170}
                height={41}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
