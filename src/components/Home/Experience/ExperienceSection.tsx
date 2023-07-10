import React from 'react'
import { ExperienceTitle } from './ExperienceTitle'
import { SectionContent } from '../../ui'
import { ExperienceContainer } from './ExperienceContainer'

export const ExperienceSection = () => {
  return (
    <section className="flex justify-center items-center sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 sm:pt-6 mt-[40px] overflow-x-hidden" id="experience-section">
      <div className="flex justify-center items-center xl:max-w-[1280px] w-full pt-[100px] flex-col mx-auto gap-5">
        <ExperienceTitle  />
        <SectionContent>
          <ExperienceContainer />
        </SectionContent>
      </div>
    </section>
  )}
