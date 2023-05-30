import Link from "next/link";
import React, { FC, SVGProps } from "react";

interface Props{
    svgComponent: React.FC<{height?: string}>;
    title: string
    description: string
    urlDoc: string
}
export const CardSkill:FC<Props> = ({
    svgComponent: SvgComponent,
    title,
    description,
    urlDoc
}) => {
  return (
    <div className="max-w-md p-6 mx-auto rounded-lg shadow card-skill transition duration-300 ease-in-out cursor-pointer bg-zinc-900 hover:scale-105 hover:shadow-lg hover:bg-zinc-800">
      <div className="w-10 h-10 mb-4 text-gray-400">
        <SvgComponent  height="50"/>
      </div>
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h5>

      <p className="mb-3 font-normal text-gray-400">{description}</p>
      <Link
        href={urlDoc}
        className="inline-flex items-center text-yellow-600 hover:underline"
        target="_blank"
      >
        Ver documentación
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
