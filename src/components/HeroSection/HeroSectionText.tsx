import { FC } from "react";
// Packages Third
import { AnimationControls, motion } from "framer-motion";
// Components & Data
import { Button } from "../ui";
import {
  heroSectionText,
  heroSectionButtons,
  animateHeroBanner,
  animateHeroSectionLeftInitialState,
} from "@/data";
import {
  RefUseAnimate,
  useAnimate,
} from "@/hooks/useAnimate";

export const HeroSectionText: FC = () => {
  const { supTitle, title, subTitle, descriptionSup, descriptionSub } = heroSectionText;
  const [ref, controls] = useAnimate(animateHeroBanner,animateHeroSectionLeftInitialState);
  return (
    <motion.div
      className="flex flex-1 flex-col justify-center lg:items-start items-center"
      initial={animateHeroSectionLeftInitialState}
      animate={controls as AnimationControls}
      ref={ref as RefUseAnimate["ref"]}
    >
      <p className="sm:text-[20px] text-[16px] lg:leading-[27px] leading-[23px] font-semibold text-yellow-600 mb-5">
        {supTitle}
      </p>
      <h1 className="text-white font-bold lg:text-[64px] lg:leading-[70px] leading-[46px] text-[40px]  tracking-[-0.5%] lg:text-left text-center">
        {title} <span className="text-gradient-h1">{subTitle}</span>
      </h1>
      <p className="sm:text-[20px] text-[16px] lg:leading-[27px] leading-[23px] mt-5 mb-10 font-normal text-[#d1cccce2] lg:text-left text-center">
        {descriptionSup} <br /> {descriptionSub}
      </p>
      <div className="flex flex-row justify-start items-center gap-3">
        {heroSectionButtons.map(({ bgColor, title, to }, index) => (
          <Button key={index} bgColor={bgColor} title={title} to={to} />
        ))}
      </div>
    </motion.div>
  );
};
