// Components
import { HeroSectionText } from './HeroSectionText'
import { HeroSectionImage } from './HeroSectionImage'

export const HeroSection = () => {
  return (
    <div className='flex justify-center items-center sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 sm:pt-6 pt-28 hero-section-height overflow-x-hidden' id='hero-section'>
      <div className='flex justify-center items-center xl:max-w-[1280px] w-full pt-[100px] lg:flex-row flex-col mx-auto gap-5'>
        <HeroSectionText />
        <HeroSectionImage />
      </div>
    </div>
  )
}
