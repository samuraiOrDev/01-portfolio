import React, { FC } from 'react'

interface Props{}
import { AiFillGithub } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { Icon } from './Icon'

const iconsFooter = [
  {
    icon: AiFillGithub,
    to: 'https://github.com/samuraiOrDev'
  }, 
  {
    icon: FaTwitter,
    to: 'https://twitter.com/samuraiOrDev'
  },
  {
    icon: FaLinkedinIn,
    to: 'https://www.linkedin.com/in/samuraiOrDev/'
  },
  {
    icon: FaInstagram,
    to: 'https://www.instagram.com/samuraiOrDev/'
  }
]
export const Footer:FC<Props> = () => {
  return (
    <footer className='w-full p-6 flex justify-center items-center border-t-[#222] border-t-2 h-[160px]'>
            <div className='w-full flex justify-between md:items-start items-center md:flex-row flex-col xl:max-w-[1280px]'>
                <div className='flex flex-1 md:mb-0 mb-7'>
                    {
                        iconsFooter.map(({icon, to},index) => (
                          <Icon key={index} icon={icon} to={to}/>
                        ))
                    }
                </div>
                <div className='flex flex-1 justify-end items-start'>
                    <p className='sx:text-[18px] xs:leading-[22px] text-[16px] leading-[20px] font-bold md:text-left text-centertext-[#A3B3BC]'>Copyright @ 2023 Samura.Dev.Ord</p>
                </div>
            </div>
    </footer>
  )
}
