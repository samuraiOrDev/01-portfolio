import React from "react";
import { ElementH2, ElementP } from "../ui";
import { expeienceSection} from "@/data";

export const ExperienceTitle = () => {
  const { title, description } = expeienceSection;

  return (
    <>
      <ElementH2 mainTitle={title} textGradient />
      <ElementP description={description} />
    </>
  );
};
