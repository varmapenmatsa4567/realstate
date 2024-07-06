import React from 'react'

const FilterItem = ({text, hasMenu}) => {
  return (
    <button className='text-black font-medium text-sm hover:border-black rounded-md border-[#e5e5e5] border-[1px] px-3 py-1'>{text}</button>
  )
}

export default FilterItem