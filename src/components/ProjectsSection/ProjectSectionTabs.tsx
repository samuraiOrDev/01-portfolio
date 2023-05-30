import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsFillProjectorFill, BsGithub } from "react-icons/bs";
import Image from "next/image";

const allProjects = [
  {
    id: "frontend/1",
    title: "Scroll Infinite",
    img: "/next.svg",
    url: "https://scroll-infinite-react-js.vercel.app/",
    repo: "",
    urlDescription: "#scroll-infinite",
  },
  {
    id: "frontend/2",
    title: "Pokedex Next JS",
    img: "/vercel.svg",
    url: "https://pokedex-next-js-seven.vercel.app/",
    repo: "",
    urlDescription: "#pokedex-next-js",
  },
  {
    id: "frontend/3",
    title: "To Do List React JS",
    url: "https://tod-do-react.vercel.app/",
    img: "/next.svg",
    repo: "https://github.com/samuraiOrDev/To-Do-React",
    urlDescription: "#to-do-react",
  },
  {
    id: "frontend/4",
    title: "Animal Patient Manager React JS",
    url: "https://animal-patient-manager.vercel.app/",
    img: "/vercel.svg",
    repo: "https://github.com/samuraiOrDev/Animal-Patient-Manager",
    urlDescription: "#animal-patient-manager-react-js",
  },
  {
    id: "backend/1",
    title: "Api Rest Pokemon Node JS",
    img: "/next.svg",
    url: "https://backend-pokemon.vercel.app/pokemon/",
    repo: "",
    urlDescription: "#api-rest-pokemon-node-js",
  },
  {
    id: "maquetacion/1",
    title: "GameBoy Color",
    img: "/vercel.svg",
    url: "https://gameboypikachu.netlify.app/",
    repo: "",
    urlDescription: "#gameboy-color",
  },
];
const allProjectslength = allProjects.length;
export const ProjectSectionTabs = () => {
  console.log(allProjects.slice(0, 3));
  console.log(allProjects);
  const [projectPrev, setProjectPrev] = useState(0);
  const [projectNext, setProjectNext] = useState(3);
  const [selectedTab, setSelectedTab] = useState(
    allProjects.slice(projectPrev, projectNext)
  );
  useEffect(() => {
    setSelectedTab( allProjects.slice(projectPrev, projectNext));
  }, [projectPrev, projectNext]);

  const handleChaneTab = (index: number) => {
    console.log({index});
    if (index === 0) {
      setProjectPrev(0);
      setProjectNext(3);
    } else if (index === allProjectslength - 1) {
      setProjectPrev(allProjectslength - 3);
      setProjectNext(allProjectslength);
    } else {
      setProjectPrev(index);
      setProjectNext(index + 3);
    }
    console.log({
      projectPrev,
      projectNext,
    })
  };
  return (
    <div className="rounded-lg xl:max-w-[1024px] w-full flex flex-col md:flex-row gap-y-5 md:gap-x-3 md:flex-wrap justify-center">
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-3 flex-wrap mx-auto w-full"
          >
            {selectedTab &&
              selectedTab.map((project, index) => (
                <div
                  className="bg-zinc-800 p-6 rounded-lg h-[250px] flex justify-center items-center flex-col w-3/12"
                  key={index}
                >
                  <div className="flex justify-center items-center h-2/3 w-full">
                    <div className="w-full h-full flex justify-center items-centerrounded-xl">
                      <Image
                        src={project.img}
                        alt="next-js"
                        className="w-full h-full"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center items-center flex-row w-full mt-3 gap-1 h-1/3">
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
              ))}
          </motion.div>
        </AnimatePresence>
      </main>
      <div className="flex justify-center items-center gap-3">
        {Array.from({ length: Math.ceil(allProjectslength / 3) }, (_, i) => (
          <button className="h-[30px] w-[30px] bg-zinc-800 rounded-full" key={i} onClick={() => handleChaneTab(i )}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
