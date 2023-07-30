import React, { FC } from 'react'

interface Props {
    children: React.ReactNode
}
export const Table:FC<Props> = ({children}) => {
    return (
        <div className="table-wrapper">
          <table>{children}</table>
        </div>
      );
  
}
