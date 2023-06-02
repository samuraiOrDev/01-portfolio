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
  ExperienceSection,
  ProjectsSection
} from "@/components";
import { frontMatter } from "@/data/config";



const HomePage: NextPage = () => {
  return (
    <MainLayout  title={frontMatter.title} description={frontMatter.description} font={inter.className}>
      <HeroSection />
      <MainSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default HomePage;
