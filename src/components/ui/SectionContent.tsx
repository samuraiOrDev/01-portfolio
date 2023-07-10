import React, { FC } from "react";
import { animateHeroBanner, animateHeroSectionRightInitialState, animateHeroSectionLeftInitialState } from "@/data";
import { RefUseAnimate, useAnimate } from "@/hooks/useAnimate";
import { AnimationControls, motion } from "framer-motion";

interface SectionContentProps {
  children: React.ReactNode;
  left?: boolean;
  colorViolet?: boolean;
}
export const SectionContent: FC<SectionContentProps> = ({
  children,
  left = false,
  colorViolet = false,
}) => {
    let animate = animateHeroSectionRightInitialState;
    if (left) animate = animateHeroSectionLeftInitialState;
    
  const [ref, controls] = useAnimate(
    animateHeroBanner,
    animate
  );
  return (
    <motion.div
      className="flex items-center justify-center xl:max-w-[1024px] w-full mt-6 mx-auto flex-wrap lg:border-dashed lg:border-yellow-600 lg:border-4 rounded-md h-auto relative sm:p-12"
      animate={controls as AnimationControls}
      ref={ref as RefUseAnimate["ref"]}
      initial={animateHeroSectionRightInitialState}
    >
      {children}
    </motion.div>
  );
};
