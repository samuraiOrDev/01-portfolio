import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
// Package Third
import { BsFillProjectorFill, BsGithub } from "react-icons/bs";
// Components
import { allProjects } from "@/data";

interface TypeAppProjects {
  id: string;
  title: string;
  img: string;
  url: string;
  repo: string;
}

const Card: FC<TypeAppProjects> = ({ id, title, img, url, repo }) => (
  <div className="flex-[1_0_250px] shadow-lg shadow-black m-[1rem] overflow-hidden rounded-[6px]">
    <Image
      src={img}
      alt={title || "Image"}
      width={250}
      height={250}
      loading="lazy"
      className="object-fill hover:scale-105 hover:shadow-l hover:bg-zinc-800 transition ease-in-out duration-300"
    />

    <div className="flex justify-center items-center flex-row w-full p-6 gap-1 bg-zinc-800">
      <div className="bg-gradient-to-r from-yellow-600 from-0%  to-purple-800 to-100% p-3 rounded flex items-center justify-center">
        <Link
          href={url}
          className="flex items-center justify-center h-full w-full text-white"
          target="_blank"
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
      <div className="bg-gradient-to-r from-yellow-600 from-0%  to-purple-800 to-100% p-3 rounded flex items-center justify-center">
        <Link
          href={repo}
          className="flex items-center justify-center h-full w-full text-white"
          target="_blank"
        >
          <BsGithub className="w-5 h-5" />
        </Link>
      </div>
      <div className="bg-gradient-to-r from-yellow-600 from-0%  to-purple-800 to-100% p-3 rounded flex items-center justify-center">
        <Link
          href={`http://localhost:3000/projects/${id}`}
          className="flex items-center justify-center h-full w-full text-white"
        >
          <BsFillProjectorFill className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
);
interface TypePropsCardContainer {
  cards: TypeAppProjects[];
}
const CardContainer: FC<TypePropsCardContainer> = ({ cards }) => (
  <div className="flex rounded-[6px] p-[1rem] overflow-x-auto relative hide-scrollbar">
    {cards.map((card) => (
      <Card {...card} key={card.id}/>
    ))}
  </div>
);

export const ProjectSectionCards = () => {
  return (
    <div>
      <CardContainer cards={allProjects} />
    </div>
  );
};
