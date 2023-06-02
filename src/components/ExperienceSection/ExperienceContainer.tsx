
import React from 'react'
import { CardExperience } from './CardExperience'
import { ExperienceTag, experience } from '@/data'

export const ExperienceContainer = () => {
  return (
    <div className="grid lg:grid-rows-1  grid-rows-3 grid-flow-col xl:max-w-[920px] sw-full gap-3 mx-auto">
    {experience.map(({ id, job, date, project, tags }) => (
      <CardExperience
        key={id}
        id={id}
        job={job}
        date={date}
        project={project}
        tags={tags as ExperienceTag[]}
      />
    ))} 
  </div>
)}