import React from "react";
// Components && Data
import { SkillsTitle } from "./SkillsTitle";
import { SkillSectionTabs } from "./SkillSectionTabs";
import { SectionContent } from "../ui";

export const SkillsSection = () => {
  return (
    <section className="flex justify-center items-center sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 sm:pt-6 mt-[40px] overflow-x-hidden" id="skills-section">
      <div className="flex justify-center items-center xl:max-w-[1280px] w-full pt-[100px] flex-col mx-auto gap-5">
        <SkillsTitle />
        <SectionContent>
          <SkillSectionTabs />
        </SectionContent>
      </div>
    </section>
  );
};
