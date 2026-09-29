import { StaticImageData } from "next/image";
import {
  categoryDesign,
  categoryDevelopment,
  categoryItSoftware,
  categoryBusiness,
  categoryMarketing,
  categoryPhotography,
} from "@/assets";

export interface LearningPath {
  id: number;
  title: string;
  icon: StaticImageData;
  href?: string;
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 1,
    title: "Design",
    icon: categoryDesign,
    href: "#",
  },
  {
    id: 2,
    title: "Development",
    icon: categoryDevelopment,
    href: "#",
  },
  {
    id: 3,
    title: "IT & Software",
    icon: categoryItSoftware,
    href: "#",
  },
  {
    id: 4,
    title: "Business",
    icon: categoryBusiness,
    href: "#",
  },
  {
    id: 5,
    title: "Marketing",
    icon: categoryMarketing,
    href: "#",
  },
  {
    id: 6,
    title: "Photography",
    icon: categoryPhotography,
    href: "#",
  },
];
