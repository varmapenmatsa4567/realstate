import React from 'react'

export const MenuItem = ({text}) => {
  return (
    <div className='text-black text-start px-3 py-2 m-1 hover:bg-blue-50 hover:text-blue-500 rounded-lg'>
        {text}
    </div>
  )
}
