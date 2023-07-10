import Image from 'next/image'

export const HeroBanner = () => {
  return (
    <Image  
        src="/HeroBanner.png" 
        width={580} 
        height={1080}  
        alt='Hero Banner' 
        priority
    />
  )
}
