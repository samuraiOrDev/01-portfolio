import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsFillProjectorFill, BsGithub } from "react-icons/bs";
import Image from "next/image";

const allProjects = [
  {
    title: "Frontend",
    elements: [
      {
        id: "frontend/1",
        title: "Scroll Infinite",
        url: "https://scroll-infinite-react-js.vercel.app/",
        repo: "",
        urlDescription: "#scroll-infinite",
      },
      {
        id: "frontend/2",
        title: "Pokedex Next JS",
        url: "https://pokedex-next-js-seven.vercel.app/",
        repo: "",
        urlDescription: "#pokedex-next-js",
      },
      {
        id: "frontend/3",
        title: "To Do List React JS",
        url: "https://tod-do-react.vercel.app/",
        repo: "https://github.com/samuraiOrDev/To-Do-React",
        urlDescription: "#to-do-react",
      },
      {
        id: "frontend/4",
        title: "Animal Patient Manager React JS",
        url: "https://animal-patient-manager.vercel.app/",
        repo: "https://github.com/samuraiOrDev/Animal-Patient-Manager",
        urlDescription: "#animal-patient-manager-react-js",
      }
    ],
  },
  {
    title: "Backend",
    elements: [
      {
        id: "backend/1",
        title: "Api Rest Pokemon Node JS",
        url: "https://backend-pokemon.vercel.app/pokemon/",
        repo: "",
        urlDescription: "#api-rest-pokemon-node-js",
      },
    ],
  },
  {
    title: "Maquetación",
    elements: [
      {
        id: "maquetacion/1",
        title: "GameBoy Color",
        url: "https://gameboypikachu.netlify.app/",
        repo: "",
        urlDescription: "#gameboy-color",
      },
    ],
  },
];
export const ProjectSectionTabs = () => {
  const [selectedTab, setSelectedTab] = useState(allProjects[0]);
  return (
    <div className="bg-zinc-900 rounded-lg xl:max-w-[1024px] w-full flex flex-col md:flex-row gap-y-5 md:gap-x-3 md:flex-wrap justify-center">
      <ul className="flex items-center justify-center p-3 w-full gap-6">
        {allProjects.map((item) => (
          <li
            key={item.title}
            className={`cursor-pointer font-bold text-[20px] ${
              item === selectedTab
                ? "text-purple-600 border-b-2 border-purple-600"
                : ""
            }`}
            onClick={() => setSelectedTab(item)}
          >
            {`${item.title}`}
            {item === selectedTab ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </li>
        ))}
      </ul>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.title : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-4 gap-1 p-1 mx-auto"
          >
            {selectedTab &&
              selectedTab.elements.map((project, index) => (
                <div
                  className="p-6 mx-auto transition duration-300 ease-in-out cursor-pointer"
                  key={index}
                >
                  <div className="bg-zinc-800 p-3 rounded-lg h-[150px] flex justify-center items-center flex-col">
                    <div className="flex justify-center items-center">
                      <div className="w-12 h-12 bg-zinc-700 flex justify-center items-center">
                        <Image
                          src="/icons/next-js.svg"
                          alt="next-js"
                          className="w-8 h-8"
                          width={32}
                          height={32}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center items-center flex-row w-full mt-3 gap-1">
                      <div className="bg-purple-800 p-3 rounded flex items-center justify-center">
                        <Link
                          href={project.url}
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
                      <div className="bg-purple-800 p-3 rounded flex items-center justify-center">
                        <Link
                          href={project.repo}
                          className="flex items-center justify-center h-full w-full text-white"
                          target="_blank"
                        >
                          <BsGithub className="w-5 h-5" />
                        </Link>
                      </div>
                      <div className="bg-purple-800 p-3 rounded flex items-center justify-center">
                        <Link
                          href={`http://localhost:3000/projects/${project.id}`}
                          className="flex items-center justify-center h-full w-full text-white"
                        >
                          <BsFillProjectorFill className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
