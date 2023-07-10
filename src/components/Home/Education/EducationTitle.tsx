import React from 'react'
import { ElementH2, ElementP } from '../../ui'
import { educationSection } from '@/data'
export const EducationTitle = () => {
  const { title, description } = educationSection
  return (
    <>
        <ElementH2  mainTitle={title} textGradient/>
        <ElementP description={description} />
    </>
  )
}
