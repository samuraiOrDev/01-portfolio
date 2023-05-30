import React from 'react'
// Packages Third
import { AnimationControls, motion} from 'framer-motion';

// Components & Data
import { RefUseAnimate, useAnimate } from '@/hooks/useAnimate';
import { ElementH2, ElementP } from '../ui'
import {aboutMeSection, animateMainSection, animateMainSectionInitialState} from '@/data';
export const AboutSection = () => {
  const {title, subTitle, parrafos} = aboutMeSection;
  const [ref, controls] = useAnimate(
    animateMainSection,
    animateMainSectionInitialState
  );
  return (
    <motion.div className='flex justify-center items-center sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 sm:pt-6 mt-[40px] overflow-x-hidden' animate={controls as AnimationControls} ref={ref as RefUseAnimate["ref"]}initial={animateMainSectionInitialState}>
        <div className='flex justify-center items-center xl:max-w-[1280px] w-full pt-[100px] flex-col mx-auto gap-5' id='about-section'>
            <ElementH2  mainTitle={title} mainTitleTail={subTitle} lineBreak/>
            {parrafos.map((parrafo, index) => (
              <ElementP key={index} description={parrafo} about/>
            ))}
        </div>
    </motion.div>
  )
}

