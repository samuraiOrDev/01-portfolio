import React from 'react'

export const EmailSucess = () => {
  return (
    <div className="mt-6 w-full md:w-1/2 lg:border-dashed border-green-600 border-4 rounded-md flex flex-col items-center justify-center h-[200px]">
          <div className="h-12 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="green"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <p className=" text-center p-4 text-green-400">El mensaje se ha enviado de forma correcta. <br/>Lo antes posible contestaré tu petición!!!.</p>
        </div>
  )
}
