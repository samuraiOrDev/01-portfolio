import React, { FC } from "react";
import { ProjectTitle } from "./ProjectTitle";
import { ProjectsSectionContent } from "./ProjectsSectionContent";
import { ProjectSectionTabs } from "./ProjectSectionTabs";
import { ProjectSectionCards } from "./ProjectSectionCards";

interface Props {}
export const ProjectsSection: FC<Props> = () => {
  return (
    <section className="flex justify-center items-center sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 sm:pt-6 mt-[40px] overflow-x-hidden" id="projects-section">
        <div className="flex justify-center items-center xl:max-w-[1280px] w-full pt-[100px] flex-col mx-auto gap-5">
          <ProjectTitle />
          {/* <ProjectsSectionContent>
              <ProjectSectionTabs />
          </ProjectsSectionContent> */}
          <ProjectSectionCards />
        </div>
    </section>
  );
};
