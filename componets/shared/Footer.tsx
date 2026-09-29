import { FooterBottom, FooterNav, FooterNewsletter } from "./footer";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-200 pt-16 sm:pt-20 lg:pt-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          <div className="lg:col-span-5 xl:col-span-5">
            <FooterNewsletter />
          </div>

          <div className="lg:col-span-7 xl:col-span-7 lg:pl-6 xl:pl-10">
            <FooterNav />
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
