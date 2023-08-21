import Image from "next/image";
import React, { FC } from "react";
import { Button } from "../ui";
import { AnimationControls, motion } from "framer-motion";
import { RefUseAnimate, useAnimate } from "@/hooks/useAnimate";
import { animateMainSection, animateMainSectionInitialState } from "@/data";
interface Props {
  id: number;
  title: string;
  description: string;
  img: string;
  to: string;
}
export const CardBlog: FC<Props> = ({
  id,
  title,
  description,
  img,
  to = "",
}) => {
  const [ref, controls] = useAnimate(
    animateMainSection,
    animateMainSectionInitialState
  );
  return (
    <motion.div
      className="max-w-lg mx-auto h-fit w-fit"
      animate={controls as AnimationControls}
      ref={ref as RefUseAnimate["ref"]}
      initial={animateMainSectionInitialState}
    >
      <div className="bg-zinc-900 shadow-lg shadow-[#333] rounded-lg max-w-sm mb-5 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-zinc-800">
        <div className="h-[300px] md:w-[380px] w-auto relative">
          <Image className="rounded-t-lg" src={img} alt={title} fill />
        </div>
        <div className="p-5">
          <h5 className="text-2xl tracking-tight text-white font-bold sm:text-[18px] text-[16px] mt-2 mb-2">
            {title}
          </h5>
          <p className="sm:text-[16px] text-[14px] sm:leading-[23px] leading-[20px] sm:w-[85%] w-[100%] font-normal text-[#d1cccce2] mt-2 text-start mb-2">
            {description}
          </p>
          <Button title={"Leer más"} to={to} bgColor="#5b21b6" />
        </div>
      </div>
    </motion.div>
  );
};
