import React from 'react'
import {  ElementH3 } from '../ui'
import { EducationSectionContent } from './EducationSectionContent'
import { ListFaqsEducationSection } from './ListFaqsEducationSection'
import { EducationTitle } from './EducationTitle'
import { EducactionSectionContentTitles } from './EducactionSectionContentTitles'
import { EducationSectionContentProgress } from './EducationSectionContentProgress'
export const EducationSection = () => {
  return (
    <section className='flex justify-center items-center sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 sm:pt-6 mt-[40px] overflow-x-hidden' id='education-section'>
        <div className='flex justify-center items-center xl:max-w-[1280px] w-full pt-[100px] flex-col mx-auto gap-5'>
          
            <EducationTitle />
            {/* Titulos */}
            <ElementH3 title='Títulos' education />
            <EducationSectionContent>
              <EducactionSectionContentTitles />
            </EducationSectionContent>
            {/* Cursos */}
            <ElementH3 title='Cursos' education />
            <ListFaqsEducationSection />
            {/* Others */}
            {/* <ElementH3 title='En progreso' education />
            <EducationSectionContent>
              <EducationSectionContentProgress />
            </EducationSectionContent> */}
        </div>
    </section>
  )
}
