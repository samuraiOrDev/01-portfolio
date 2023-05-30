import Link from "next/link";
import React, { FC } from "react";

interface Props {
    porcentaje: number
    to: string
    bgColor?: string
    textColor?: string
    title: string
}
export const CardProgress:FC <Props> = ({
    porcentaje,
    to,
    bgColor = 'bg-yellow-700',
    textColor = 'text-yellow-300',
    title
}) => {
  return (
    <div
      className="flex items-center justify-center xl:max-w-[920px] w-full mt-6 mx-auto flex-wrap rounded-md h-auto relative p-2 bg-zinc-900   transition
    duration-300
    ease-in-out
    
    hover:scale-105
    hover:shadow-lg
    hover:bg-zinc-800"
    >
      <div className="flex flex-col items-start justify-center gap-3">
        <h3 className="text-[14px] font-bold text-start">{title}</h3>
        <div className="flex items-center justify-start w-full mx-auto">
          <p className="text-center text-[12px] p-1 rounded" style={{"backgroundColor": bgColor, "color": textColor}}>
            {porcentaje}%
          </p>
          <Link href={to}>
            <svg
              className="w-5 h-5 ml-2"
              fill="#efb810"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
