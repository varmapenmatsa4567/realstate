import React from 'react'
import { FaRegHeart } from "react-icons/fa";


const Card = ({img}) => {
  return (
    <div className='bg-white rounded-lg flex flex-col shadow-md cursor-pointer'>
        <div className='relative'>
          <img src={img} className='rounded-t-lg'/>
          <div className='text-xs font-semibold py-0.5 rounded-full px-2 absolute text-white bg-[#70bf44] bottom-3 left-3'>For Sale</div>
          <div className='text-xs font-semibold py-0.5 rounded-full px-2 absolute text-white bg-black bottom-3 right-3'>1 day</div>
        </div>
        <div className='text-black p-4'>
          <div className='flex'>
            <h2 className='font-bold text-xl'>$3,200,000</h2>
            <FaRegHeart size={20} className='ml-auto cursor-pointer hover:text-red-500' />
          </div>
          <p className='text-base my-1'>Automotive Related2400 sqft</p>
          <p className='text-sm'>21-23 Union Street, Brampton, ON • Downtown Brampton</p>
          <div className='flex items-center justify-between mt-2'>
            <p className='whitespace-nowrap text-xs overflow-hidden overflow-ellipsis font-bold text-[#9e9e9e]'>MLS® W9012085 • ROYAL LEPAGE CREDIT VALLEY REAL</p>
            <p className='text-[0.75rem] whitespace-nowrap font-bold text-[#70bf44]'>With Property</p>
          </div>
        </div>
    </div>
  )
}

export default Card