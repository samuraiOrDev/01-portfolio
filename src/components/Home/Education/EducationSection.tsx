import React from "react";
// Components
import { ElementH3, SectionContent } from "../../ui";
import { ListFaqsEducationSection } from "./ListFaqsEducationSection";
import { EducationTitle } from "./EducationTitle";
import { EducactionSectionContentTitles } from "./EducactionSectionContentTitles";
export const EducationSection = () => {
  return (
    <section
      className="flex justify-center items-center sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 sm:pt-6 mt-[40px] overflow-x-hidden"
      id="education-section"
    >
      <div className="flex justify-center items-center xl:max-w-[1280px] w-full pt-[100px] flex-col mx-auto gap-5">
        <EducationTitle />

        <ElementH3 title="Títulos" education />
        <SectionContent>
          <EducactionSectionContentTitles />
        </SectionContent>

        <ElementH3 title="Cursos" education />
        <ListFaqsEducationSection />
      </div>
    </section>
  );
};
