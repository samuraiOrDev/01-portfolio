import React from "react";
import { AnimationControls, motion } from "framer-motion";
import { ElementH2, ElementP } from "../ui";
import { RefUseAnimate, useAnimate } from "@/hooks/useAnimate";
import { animateMainSection, animateMainSectionInitialState } from "@/data";
export const BlogTitle = () => {
  const [ref, controls] = useAnimate(
    animateMainSection,
    animateMainSectionInitialState
  );
  return (
    <motion.div
      className="p-10 text-center"
      animate={controls as AnimationControls}
      ref={ref as RefUseAnimate["ref"]}
      initial={animateMainSectionInitialState}
    >
      <ElementH2 mainTitle={"Bienvenido a mi"} mainTitleTail={"Blog"} />
    </motion.div>
  );
};
