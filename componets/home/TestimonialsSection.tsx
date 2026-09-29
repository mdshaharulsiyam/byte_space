import {
  TestimonialCard,
  TestimonialsHeader,
  testimonialsData,
} from "./testimonials";

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-24 overflow-hidden bg-gradient-to-br from-[#fafbf7] via-[#f9fafc] to-[#edf2fc]">
      <div
        className="absolute bottom-0 left-0 w-[550px] h-[550px] pointer-events-none rounded-full blur-3xl opacity-35"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] pointer-events-none rounded-full blur-3xl opacity-35"
        style={{
          background: "radial-gradient(circle, #d4fb20 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        <TestimonialsHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-14 lg:mt-16">
          {testimonialsData.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
