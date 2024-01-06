import Link from "next/link";
import React, { FC } from "react";

interface Props {
  bgColor?: string;
  title: string;
  to: string;
  target?: string;
}
export const Button: FC<Props> = ({ bgColor = "bg-violet-500", title, to, target }) => {
  return (
    <div
      className={`flex-flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer min-h-[48px] text-white w-fit transition duration-300 hover:scale-105`}
      style={{ backgroundColor: bgColor }}
    >
      <Link
        href={to}
        className="text-white font-bold text-[16px]"
        title={title}
        target={target}
      >
        {title}
      </Link>
    </div>
  );
};
