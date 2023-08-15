import React, { FC } from "react";

import { ElementH3, ElementP } from "../../ui";
import type { IconType } from "react-icons";
import Link from "next/link";

interface Props {
  bgIcon: string;
  title: string;
  icon: IconType;
  description: string;
  to: string;
}
export const MainCardItem: FC<Props> = ({
  bgIcon,
  title,
  icon: Icon,
  description,
  to,
}) => {
  return (
    <div
      className="flex 
                items-start 
                justify-center
                rounded-lg 
                shadow-sm
                h-full
                flex-col
                transition
                duration-300
                ease-in-out
                cursor-pointer
                p-4
                bg-zinc-900
                hover:scale-105
                hover:shadow-lg
                hover:bg-zinc-800
                relative
                "
    >
      <div
        className={`flex items-center justify-center h-[50px] w-[50px] rounded-full`}
        style={{ backgroundColor: bgIcon }}
      >
        <Icon className="text-white text-[25px]" />
      </div>
      <ElementH3 title={title} />
      <ElementP description={description} card />

      <Link
        href={to}
        className="inline-flex items-center text-yellow-600 hover:underline mt-2"
      >
        Leer más
        <svg
          className="w-5 h-5 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
      </Link>
    </div>
  );
};
