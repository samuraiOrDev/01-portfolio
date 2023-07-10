import React from "react";

// Packages Third
import { AnimationControls, motion } from "framer-motion";

// Components & Data
import {
  mainSectionTitle,
  animateMainSection,
  animateMainSectionInitialState,
  mainSectionText,
} from "@/data";
import { ElementH2, ElementP } from "../../ui";
import {
  RefUseAnimate,
  useAnimate,
} from "@/hooks/useAnimate";

export const MainSectionText = () => {
  const { mainTitle, mainTitleTail } = mainSectionTitle;
  const { description } = mainSectionText;
  const [ref, controls] = useAnimate(
    animateMainSection,
    animateMainSectionInitialState
  );
  return (
    <motion.div
      animate={controls as AnimationControls}
      ref={ref as RefUseAnimate["ref"]}
      initial={animateMainSectionInitialState}
    >
      <ElementH2 mainTitle={mainTitle} mainTitleTail={mainTitleTail} />
      <ElementP description={description} />
    </motion.div>
  );
};
