import React, { FC, useState } from "react";

export const allSkills = [
  {
    title: "Lenguajes",
    elements: [
      { component: LogoJavaScript, title: "JavaScript" },
      { component: LogoTypeScript, title: "TypeScript" },
      
      { component: LogoJava, title: "Java" },
      { component: LogoPython, title: "Python" },
    ],
  },
  {
    title: "Frontend",
    elements: [
      { component: LogoHtml, title: "Html" },
      { component: LogoCss, title: "Css" },
      { component: LogoVite, title: "Vite JS" },
      { component: LogoAstro, title: "Astro" },
      { component: LogoReact, title: "React" },
      { component: LogoNext, title: "Next JS" },
      { component: LogoTailWindCss, title: "Tailwind CSS" },
      { component: LogoBootstrap, title: "Bootstrap" },
      { component: LogoEslint, title: "Eslint" },
      { component: LogoJQuery, title: "JQuery" },
    ],
  },
  {
    title: "Backend",
    elements: [
      { component: LogoNode, title: "NodeJs" },
      { component: LogoSpring, title: "Spring" },
      { component: LogoExpress, title: "Express" },
      { component: LogoDjango, title: "Django" },
    ],
  },
  {
    title: "BbDd",
    elements: [
      { component: LogoMongoDB, title: "MongoDB" },
      { component: LogoMySql, title: "MySQL" },
      { component: LogoSqLite, title: "SQLite" },
      { component: LogoPostgresql, title: "PostgreSQL" },
    ],
  },
];

// Packages Third
import { motion, AnimatePresence } from "framer-motion";
import {
  LogoAstro,
  LogoBootstrap,
  LogoCss,
  LogoDjango,
  LogoEslint,
  LogoExpress,
  LogoHtml,
  LogoJQuery,
  LogoJava,
  LogoJavaScript,
  LogoMongoDB,
  LogoMySql,
  LogoNext,
  LogoNode,
  LogoPostgresql,
  LogoPython,
  LogoReact,
  LogoSpring,
  LogoSqLite,
  LogoTailWindCss,
  LogoTypeScript,
  LogoVite,
} from "../../Svg";

export const SkillSectionTabs: FC = () => {
  const [selectedTab, setSelectedTab] = useState(allSkills[0]);
  return (
    <div className="bg-zinc-900 rounded-lg xl:max-w-[1024px] w-full flex flex-col md:flex-row gap-y-5 md:gap-x-3 md:flex-wrap justify-center">
      <ul className="flex items-center justify-center p-3 w-full sm:gap-6 gap-2">
        {allSkills.map((item) => (
          <li
            key={item.title}
            className={`cursor-pointer font-bold sm:text-[20px] text-[16px] ${
              item === selectedTab
                ? "text-yellow-600 border-b-2 border-yellow-600"
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
            className="grid sm:grid-cols-4 grid-cols-3 gap-1 p-1 mx-auto"
          >
            {selectedTab &&
              selectedTab.elements.map(({ component: Component }, index) => (
                <div
                  className="p-3 mx-auto transition duration-300 ease-in-out cursor-pointer"
                  key={index}
                >
                  <div className="w-[80px] h-[80px] mb-4 text-gray-400 border-2 border-dashed border-yellow-600 flex items-center justify-center rounded-full">
                    <Component height="50" />
                  </div>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
