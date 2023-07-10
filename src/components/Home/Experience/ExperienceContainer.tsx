
import React from 'react'
import { CardExperience } from './CardExperience'
import { ExperienceTag, experience } from '@/data'

export const ExperienceContainer = () => {
  return (
    <div className="flex flex-col xl:max-w-[920px] w-full gap-3 mx-auto">
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