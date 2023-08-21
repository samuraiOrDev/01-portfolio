import React from "react";
import { MainSectionText } from "./MainSectionText";
import { MainSectionContent } from "./MainSectionContent";

export const MainSection = () => {
  return (
    <div
      className="flex justify-center items-center sm:p-8 px-6 py-12"
      id="main-section"
    >
      <div className="flex justify-center items-center flex-col xl:max-w-[1280px] w-full">
        <MainSectionText />
        <MainSectionContent />
      </div>
    </div>
  );
};
