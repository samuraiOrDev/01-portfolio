import React from "react";
import { AnimationControls, motion } from "framer-motion";
import { ElementH2 } from "../ui";
import { RefUseAnimate, useAnimate } from "@/hooks/useAnimate";
import { animateMainSection, animateMainSectionInitialState } from "@/data";
export const ProjectTitle = () => {
  const [ref, controls] = useAnimate(
    animateMainSection,
    animateMainSectionInitialState
  );
  return (
    <motion.div
      className="mt-[160px] p-10 text-center"
      animate={controls as AnimationControls}
      ref={ref as RefUseAnimate["ref"]}
      initial={animateMainSectionInitialState}
    >
      <ElementH2 mainTitle={"Bienvenido a mis"} mainTitleTail={"Proyectos"} />
    </motion.div>
  );
};
