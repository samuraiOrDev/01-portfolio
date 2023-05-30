import { NextPage } from "next";
// Font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Components
import {
  MainSection,
  HeroSection,
  AboutSection,
  EducationSection,
  SkillsSection,
  ContactSection,
  MainLayout,
} from "@/components";
import { ProjectsSection } from "@/components/ProjectsSection";
import { frontMatter } from "@/data/config";



const HomePage: NextPage = () => {
  return (
    <MainLayout  title={frontMatter.title} description={frontMatter.description} font={inter.className}>
      <HeroSection />
      <MainSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
    </MainLayout>
  );
};

export default HomePage;
