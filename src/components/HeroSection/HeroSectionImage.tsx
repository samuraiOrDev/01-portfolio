import { FC } from "react";
// Packages Third
import { AnimationControls, motion } from 'framer-motion';
// Components & Data
import { HeroBanner } from "./HeroBanner";
import { animateHeroBanner, animateHeroSectionRightInitialState } from "@/data";
import { RefUseAnimate, useAnimate } from "@/hooks/useAnimate";

interface Props {}
export const HeroSectionImage: FC<Props> = () => {
  const [ref, controls] = useAnimate(
    animateHeroBanner,
    animateHeroSectionRightInitialState
  );
  return (
    <motion.div
      className="flex flex-1 w-full lg:justify-end justify-center items-center"
      initial={animateHeroSectionRightInitialState}
      ref={ref as RefUseAnimate["ref"]}
      animate={controls as AnimationControls}
    >
      <HeroBanner />
    </motion.div>
  );
};
