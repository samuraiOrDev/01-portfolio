import React from "react";
import { ElementH2, ElementP } from "../ui";
import { skillsSection } from "@/data";

export const SkillsTitle = () => {
  const { title, description } = skillsSection;

  return (
    <>
      <ElementH2 mainTitle={title} textGradient />
      <ElementP description={description} />
    </>
  );
};
