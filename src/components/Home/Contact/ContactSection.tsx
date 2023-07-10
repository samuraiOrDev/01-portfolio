import React, { FC } from 'react'
import { ElementH2 } from '../../ui'

import { RRSSContactSection } from './RRSSContactSection'
import { FormContact } from './FormContact'

interface Props{}
export const ContactSection:FC<Props> = () => {
  return (
    <section className='flex justify-center items-center sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 sm:pt-6 mt-[40px] overflow-x-hidden' id='contact-section'>
        <div className='flex justify-center items-center xl:max-w-[1280px] w-full pt-[100px] flex-col mx-auto gap-5'>
            <ElementH2 mainTitle='Contacto'  textGradient/>
            <div className="flex flex-col md:flex-row gap-y-6 items-center md:items-start justify-start md:justify-start md:gap-x-6 xl:max-w-[1024px] w-ful">
                <FormContact/>
                <RRSSContactSection/>
            </div>
        </div>
    </section>
  )
}
