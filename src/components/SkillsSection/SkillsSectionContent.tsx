import React, { FC } from "react";

// Components && Data
import {animateHeroBanner,animateHeroSectionLeftInitialState} from "@/data";
import { RefUseAnimate, useAnimate } from "@/hooks/useAnimate";
import { AnimationControls, motion } from "framer-motion";
import { ElementBorder } from "../ui";

interface SkillsSectionContentProps {
  children: React.ReactNode;
}
export const SkillsSectionContent:FC<SkillsSectionContentProps> = ({children}) => {
    const [ref, controls] = useAnimate(
        animateHeroBanner,
        animateHeroSectionLeftInitialState
      );
  return (
    <motion.div
      className="flex items-center justify-center xl:max-w-[1024px] w-full mt-6 mx-auto flex-wrap lg:border-dashed lg:border-yellow-600 lg:border-4 rounded-md h-auto relative lg:p-12"
      animate={controls as AnimationControls}
      ref={ref as RefUseAnimate["ref"]}
      initial={animateHeroSectionLeftInitialState}
    >
      <ElementBorder top left />
      <ElementBorder top right />
      <ElementBorder bottom left />
      <ElementBorder bottom right />
      {children}
    </motion.div>
  )
}
