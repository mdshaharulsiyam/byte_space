import {
  CoursesSection,
  CreatorBannerSection,
  GrowthSection,
  Hero,
  LearningPathsSection,
  ManageCoursesSection,
  Sponsors,
  TestimonialsSection,
} from "@/componets/shared";

export default function Home() {
  return (
    <div>
      <Hero />
      <Sponsors />
      <CoursesSection />
      <LearningPathsSection />
      <GrowthSection />
      <ManageCoursesSection />
      <CreatorBannerSection />
      <TestimonialsSection />
    </div>
  );
}
