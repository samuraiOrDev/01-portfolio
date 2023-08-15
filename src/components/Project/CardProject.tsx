import Image from "next/image";
import React, { FC } from "react";
import { AnimationControls, motion } from "framer-motion";
import { RefUseAnimate, useAnimate } from "@/hooks/useAnimate";
import { animateMainSection, animateMainSectionInitialState } from "@/data";
import Link from "next/link";
import { BsGithub, BsFillProjectorFill } from "react-icons/bs";
interface Props {
  id: number;
  title: string;
  description: string;
  img: string;
  to: string;
  toGitHub: string;
  toProject: string;
}
export const CardProject: FC<Props> = ({
  id,
  title,
  description,
  img,
  to = "",
  toProject = "",
  toGitHub = "",
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
      <div className="bg-zinc-900 shadow-md rounded-lg max-w-sm mb-5 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-zinc-800">
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

          {/* <Button title={"Leer más"} to={to} bgColor="#5b21b6" /> */}
          <div className="flex justify-center items-center flex-row w-full p-6 gap-1">
            <div className="  bg-purple-800 to-100% p-3 rounded flex items-center justify-center cursor-pointer transition duration-300  hover:scale-105 w-full">
              <Link
                href={to}
                className="flex items-center justify-center h-full w-full text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="#efff"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </Link>
            </div>
            <div className=" bg-purple-800 to-100% p-3 rounded flex items-center justify-center cursor-pointer transition duration-300  hover:scale-105 w-full">
              <Link
                href={toGitHub}
                className="flex items-center justify-center h-full w-full text-white"
                target="_blank"
              >
                <BsGithub className="w-5 h-5" />
              </Link>
            </div>
            <div className=" bg-purple-800 to-100% p-3 rounded flex items-center justify-center cursor-pointer transition duration-300  hover:scale-105 w-full">
              <Link
                href={toProject}
                className="flex items-center justify-center h-full w-full text-white"
                target="_blank"
              >
                <BsFillProjectorFill className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
