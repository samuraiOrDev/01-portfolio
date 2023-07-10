import React, { FC } from "react";
import { ProjectTitle } from "./ProjectTitle";
import { ProjectsSectionContent } from "./ProjectsSectionContent";
import { ProjectSectionTabs } from "./ProjectSectionTabs";
import { ProjectSectionCards } from "./ProjectSectionCards";
import { ElementH2 } from "../../ui";
import Link from "next/link";

interface Props {}
export const ProjectsSection: FC<Props> = () => {
  return (
    <section className="flex justify-center items-center sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 sm:pt-6 mt-[40px] overflow-x-hidden" id="projects-section">
        <div className="flex justify-center items-center xl:max-w-[1280px] w-full pt-[100px] flex-col mx-auto gap-5">
          <ProjectTitle />
          <ProjectSectionCards />
          <Link   href={'/projects'} className="mt-10 font-bold sm:text-[32px] sm:leading-[52px] text-[22px] leading-[36px] text-gradient-h1-reverse">
            Todos los proyectos <span>→</span>
          </Link>
        </div>
    </section>
  );
};
