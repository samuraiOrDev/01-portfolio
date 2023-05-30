import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, AnimationControls } from "framer-motion";
import {
  BsPlus,
} from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import {
  animateHeroBanner,
  animateHeroSectionLeftInitialState,
  arrayCourses,
} from "@/data";
import { CardCourse } from "./CardCourse";
import { RefUseAnimate, useAnimate } from "@/hooks/useAnimate";

const arrayCourses2 = arrayCourses.slice(0, 5);

const ListFaqsEducationSection = () => {
  const [isOpen, setIsOpen] = useState(null);
  const toggleFAQ = (index: any) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };
  const [countPrev, setCountPrev] = useState(0);
  const [countNext, setCountNext] = useState(5);
  const [arrayListCourses, setArrayListCourses] = useState(
    arrayCourses.slice(countPrev, countNext)
  );
  const [ref, controls] = useAnimate(
    animateHeroBanner,
    animateHeroSectionLeftInitialState
  );
  useEffect(() => {
    setArrayListCourses(arrayCourses.slice(countPrev, countNext));
  }, [countPrev, countNext]);

  const handleCountPrev = () => {
    if (countPrev > 0) {
      setCountPrev(countPrev - 5);
      setCountNext(countNext - 5);
    }
  };
  const handleCountNext = () => {
    if (countNext < arrayCourses.length) {
      setCountPrev(countPrev + 5);
      setCountNext(countNext + 5);
    }
  };
  return (
    <motion.div
      className="flex items-center justify-center xl:max-w-[1024px] w-full mt-[-30px] mx-auto flex-wrap h-auto relative sm:p-12"
      animate={controls as AnimationControls}
      ref={ref as RefUseAnimate["ref"]}
      initial={animateHeroSectionLeftInitialState}
    >
      <div className="xl:max-w-[920px] w-full gap-3 mx-auto cursor-pointer mt-12 sm:mt-0">
        <div>
          {arrayListCourses.map((faq, index) => {
            return (
              <div key={index}>
                <motion.div
                  layout
                  onClick={() => toggleFAQ(index)}
                  className={`px-3 py-3 border-yellow-600 ${
                    isOpen === index ? "border-b-[0px]" : ""
                  } border-2 border-dashed last:mb-4 flex justify-between items-center text-yellow-600 sm:text-xl text-[16px]`}
                >
                  {faq.title}
                  {isOpen === index ? (
                    <AiOutlineMinus className="text-yellow-600 h-[30px] w-[30px] border-yellow-600 lg:border-2 rounded-full cursor-pointer" />
                  ) : (
                    <BsPlus className="text-yellow-600 h-[30px] w-[30px] border-yellow-600 lg:border-2 rounded-full cursor-pointer" />
                  )}
                </motion.div>
                <AnimatePresence>
                  {isOpen === index && (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 1 } }}
                      className={`px-3 py-3 border-yellow-600 ${
                        isOpen === index ? "border-t-[0px]" : ""
                      } border-2 border-dashed last:mb-4 flex justify-between items-center`}
                    >
                      <CardCourse course={faq} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center">
          <button
            className="px-3 py-2  border-yellow-600  text-yellow-600 text-xl flex items-center justify-center"
            onClick={handleCountPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <p className="text-yellow-600 text-xl ">
            {countPrev + 1} - {countNext}
          </p>

          <button
            className="px-3 py-2  border-yellow-600  text-yellow-600 text-xl  flex items-center justify-center"
            onClick={handleCountNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export { ListFaqsEducationSection };
