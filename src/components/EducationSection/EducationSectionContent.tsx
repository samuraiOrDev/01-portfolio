import React, { FC } from "react";

// Components
import { ElementBorder } from "../ui";
import {
  animateHeroBanner,
  animateHeroSectionRightInitialState,
} from "@/data";
import { RefUseAnimate, useAnimate } from "@/hooks/useAnimate";
import { AnimationControls, motion } from "framer-motion";

interface EducationSectionContentProps {
  children: React.ReactNode;
}
export const EducationSectionContent:FC<EducationSectionContentProps> = ({children}) => {
  const [ref, controls] = useAnimate(
    animateHeroBanner,
    animateHeroSectionRightInitialState
  );
  return (
    <motion.div
      className="flex items-center justify-center xl:max-w-[1024px] w-full mt-6 mx-auto flex-wrap lg:border-dashed lg:border-yellow-600 lg:border-4 rounded-md h-auto relative sm:p-12"
      animate={controls as AnimationControls}
      ref={ref as RefUseAnimate["ref"]}
      initial={animateHeroSectionRightInitialState}
    >
      <ElementBorder top left />
      <ElementBorder top right />
      <ElementBorder bottom left />
      <ElementBorder bottom right />
      {children}
    </motion.div>
  );
};
