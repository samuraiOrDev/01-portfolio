import React, { FC } from 'react'
interface Props{
    top?: boolean
    left?: boolean
    bottom?: boolean
    right?: boolean
    colorViolet?: boolean
}
export const ElementBorder:FC<Props> = ({
    top,
    bottom,
    left,
    right,
    colorViolet = false
}) => {
  const color = colorViolet ? '#5b21b6' : '#ca8a04';
  return (
    <>
        {(left && top) && <div className='absolute h-[30px] w-[30px] left-[-20px] top-[-20px] rounded-xl lg:block hidden' style={{backgroundColor: color}}></div>}
        {(right && top) && <div className='absolute  h-[30px] w-[30px] right-[-20px] top-[-20px] rounded-xl lg:block hidden' style={{backgroundColor: color}}></div>}   
        {(left && bottom) && <div className='absolute  h-[30px] w-[30px] left-[-20px] bottom-[-20px] rounded-xl lg:block hidden' style={{backgroundColor: color}}></div>}
        {(right && bottom) && <div className='absolute  h-[30px] w-[30px] right-[-20px] bottom-[-20px] rounded-xl lg:block hidden' style={{backgroundColor: color}}></div>}
        
    </>
  )
}
