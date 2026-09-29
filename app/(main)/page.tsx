import {
  CoursesSection,
  GrowthSection,
  Hero,
  LearningPathsSection,
  ManageCoursesSection,
  Sponsors,
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
    </div>
  );
}
