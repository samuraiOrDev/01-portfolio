import React, { FC } from 'react'

interface Props {
    title: string;
    education?: boolean;
}
export const ElementH3:FC<Props> = ({title, education}) => {
  return (
    <>
        {
            education ? (
                <h3 className="text-white font-bold sm:text-[32px] text-[24px] mt-4 text-center sm:leading-[23px] leading-[20px] xl:w-[65%] sm:w-[75%] w-[100%]">
                    {title}
                </h3>

            ) : (
                <h3 className="text-white font-bold sm:text-[18px] text-[16px] mt-2 text-center">
                    {title}
                </h3>
            ) 
        }
    </>
  )
}





