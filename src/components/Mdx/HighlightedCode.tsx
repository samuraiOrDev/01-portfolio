import React, { FC } from 'react'

interface Props {
    children: React.ReactNode
}
export const HighlightedCode:FC<Props> = ({children}) => {
  return (
    <span className='bg-gray-800 p-1 text-yellow-500 rounded-md'>{children}</span>
  )
}
