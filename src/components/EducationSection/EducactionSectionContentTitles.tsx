import { educationSectionCards } from '@/data'
import React from 'react'
import { CardTitle } from './CardTitle'

export const EducactionSectionContentTitles = () => {
  return (
    <div className="grid sm:grid-rows-none grid-rows-2 grid-flow-col xl:max-w-[920px] w-full gap-3 mx-auto">
    {educationSectionCards.map(({ id, title, date, description, tags }) => (
      <CardTitle
        key={id}
        id={id}
        title={title}
        date={date}
        description={description}
        tags={tags as []}
      />
    ))}
  </div>
  )
}
