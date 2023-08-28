import Image from "next/image";
import React, { FC } from "react";
import { AnimationControls, motion } from "framer-motion";
import { RefUseAnimate, useAnimate } from "@/hooks/useAnimate";
import { animateMainSection, animateMainSectionInitialState } from "@/data";
import Link from "next/link";
import { BsGithub, BsFillProjectorFill } from "react-icons/bs";
import { BiBookAlt } from "react-icons/bi";
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
      <div className="bg-zinc-800  rounded-lg max-w-sm mb-5 transition duration-300 ease-in-out hover:scale-105">
        <div className="h-[300px] md:w-[380px] w-auto relative">
          <Link href={toProject} target="_blanck">
            <Image className="rounded-t-lg" src={img} alt={title} fill />
          </Link>
        </div>
        <div className="p-5">
          <h5 className="text-2xl tracking-tight text-white font-bold sm:text-[18px] text-[16px] mt-2 mb-2">
            {title}
          </h5>
          <p className="sm:text-[16px] text-[14px] sm:leading-[23px] leading-[20px] sm:w-[85%] w-[100%] font-normal text-[#d1cccce2] mt-2 text-start mb-2">
            {description}
          </p>

          <div className="flex justify-center items-center flex-row w-full p-6 gap-1">
            <div className="  bg-purple-800 to-100% p-3 rounded flex items-center justify-center cursor-pointer transition duration-300  hover:scale-105 w-full">
              <Link
                href={to}
                className="flex items-center justify-center h-full w-full text-white flex-col"
              >
                <BiBookAlt className="w-5 h-5" />
                Artículo
              </Link>
            </div>
            <div className=" bg-purple-800 to-100% p-3 rounded flex items-center justify-center cursor-pointer transition duration-300  hover:scale-105 w-full">
              <Link
                href={toGitHub}
                className="flex items-center justify-center h-full w-full text-white flex-col"
                target="_blank"
              >
                <BsGithub className="w-5 h-5" />
                GitHub
              </Link>
            </div>
            <div className=" bg-purple-800 to-100% p-3 rounded flex items-center justify-center cursor-pointer transition duration-300  hover:scale-105 w-full">
              <Link
                href={toProject}
                className="flex items-center justify-center h-full w-full text-white flex-col"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
