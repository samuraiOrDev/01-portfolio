import React, { FC } from "react";
import { AnimationControls, motion } from "framer-motion";

// components & data
import { ElementBorder } from "../ui";
import {
  animateMainSectionContent,
  animateMainSectionInitialStateContent,
  cardsMainSection,
} from "@/data";
import { RefUseAnimate, useAnimate } from "@/hooks/useAnimate";
import { MainCardItem } from "./MainCardItem";

interface Props {}
export const MainSectionContent: FC<Props> = () => {
  const [ref, controls] = useAnimate(
    animateMainSectionContent,
    animateMainSectionInitialStateContent
  );
  return (
    <motion.div
      className="flex items-center justify-center xl:max-w-[1024px] w-full mt-12 mx-auto flex-wrap sm:border-dashed sm:border-yellow-600 sm:border-4 rounded-md sm:h-[500px] h-auto relative"
      ref={ref as RefUseAnimate["ref"]}
      animate={controls as AnimationControls}
      initial={animateMainSectionInitialStateContent}
    >
      <ElementBorder top left />
      <ElementBorder top right />
      <ElementBorder bottom left />
      <ElementBorder bottom right />
      {/* <div className="flex items-center justify-center flex-wrap sm:flex-row flex-col xl:max-w-[900px] w-full gap-3 mx-auto"> */}
      <div className="grid grid-rows-2 grid-flow-col xl:max-w-[720px] w-full gap-3 mx-auto">
        {cardsMainSection.map((card, index) => (
          <MainCardItem
            key={index}
            bgIcon={card.bgIcon}
            title={card.title}
            icon={card.icon}
            description={card.description}
            to={card.to}
          />
        ))}
      </div>
    </motion.div>
  );
};
