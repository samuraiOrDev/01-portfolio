import React, { FC } from 'react'

interface Props {
    bg: string; 
    svg: any;
    title: string;
}
export const ButtonSocialComponent:FC<Props> = ({
    bg,
    svg: SvgComponent,
    title
}) => {
    const classButton = `mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ${bg}`;
  return (
    <button type="button" className={classButton} title={title}>
        <SvgComponent />
    </button>

  )
}
