import Image from "next/image";
import { manageCoursesIllustration } from "@/assets";

export default function ManageCoursesIllustration() {
  return (
    <div className="relative w-full max-w-[550px] mx-auto flex items-center justify-center">
      <div className="relative w-full transition-transform duration-500 hover:scale-[1.02]">
        <Image
          src={manageCoursesIllustration}
          alt="Create and manage educational courses on ByteSpace"
          width={557}
          height={598}
          className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
          priority
        />
      </div>
    </div>
  );
}
