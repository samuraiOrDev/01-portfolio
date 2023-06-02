import React, { FC } from 'react'
import { ElementP } from '../ui';
import { Experience, ExperienceTag } from '@/data';



export const CardExperience:FC<Experience> = (
    {id,job, date, project, tags}
) => {
  return (
    <div className="
        border-none 
        rounded-lg  
        bg-zinc-900  
        mx-auto 
        cursor-pointer 
        flex 
        lg:mb-0
        first:mb-4
        justify-center 
        flex-col 
        lg:justify-between 
        lg:items-start
        p-6 
        transition
        duration-300
        ease-in-out
        hover:scale-105
        hover:shadow-lg
      hover:bg-zinc-800
        lg:h-[250px]
        h-auto
        ">
            <div className="flex gap-x-3 gap-y-2 mb-4 md:mb-2 flex-wrap items-centerjustify-start">
                {
                    tags.map((tag: ExperienceTag) => {
                        return (
                            <div className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded" key={tag.name} style={{"backgroundColor": tag.bg,"color": tag.textColor }}>
                                {tag.name}
                            </div>
                        )
                    })
                }
            </div>
            <h3 className="text-xl text-start text-yellow-600 mt-2 mb-2" >{job}</h3>
            <p className="text-gradient-h1 mb-2">{date}</p>
            <ElementP description={project} card />
        </div>
  )
}