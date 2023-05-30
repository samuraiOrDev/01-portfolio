import { TypeArrayCourses } from '@/data';
import Link from 'next/link'
import React, { FC } from 'react'
interface Props {
    course: TypeArrayCourses;
  }
export const CardCourse:FC<Props> = ({course}) => {
    const { id, title, date, item1, item2, item3, item4, url } = course;
  return (
    <div>
        <ul className='last:list-disc ml-4 '>
            <li><b className='text-yellow-600'>Fecha:</b>{" "}{date}</li>
            <li>{item1}</li>
            <li>{item2}</li>
            <li>{item3}</li>
            <li>
                <Link href={url} target="_blanck" className='text-yellow-600'>
                    {item4}
                </Link>
            </li>
        </ul>
  </div>
  )
}
