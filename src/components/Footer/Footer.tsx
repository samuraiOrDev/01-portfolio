import React, { FC } from "react";

interface Props {}
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Icon } from "./Icon";

const iconsFooter = [
  {
    icon: HiOutlineMail,
    to: "mailto:samurai.dev.ordiales@gmail.com",
    title: "Social Email",
  },
  {
    icon: AiFillGithub,
    to: "https://github.com/samuraiOrDev",
    title: "Social GitHub",
    target: "_blank",
  },
  {
    icon: FaLinkedinIn,
    to: "https://www.linkedin.com/in/v%C3%ADctor-manuel-ordiales-garc%C3%ADa-777196206/",
    title: "Social Linkedin",
    target: "_blank",
  },
];
export const Footer: FC<Props> = () => {
  return (
    <footer className="w-full p-6 flex justify-center items-center border-t-[#222] border-t-2 h-[160px]">
      <div className="w-full flex justify-between md:items-start items-center md:flex-row flex-col xl:max-w-[1280px]">
        <div className="flex flex-1 md:mb-0 mb-7">
          {iconsFooter.map(({ icon, to, title, target }, index) => (
            <Icon
              key={index}
              icon={icon}
              to={to}
              title={title}
              target={target}
            />
          ))}
        </div>
        <div className="flex flex-1 justify-end items-start">
          <p className="sx:text-[18px] xs:leading-[22px] text-[16px] leading-[20px] font-bold md:text-left text-centertext-[#A3B3BC]">
            Copyright @ 2023 Samuraior.dev
          </p>
        </div>
      </div>
    </footer>
  );
};
