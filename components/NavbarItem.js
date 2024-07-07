import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MenuItem } from './MenuItem';

const NavbarItem = ({text, hasMenu, menu}) => {
  return (
    <button className='text-black group relative text-sm hover:bg-[#f5f5f5] rounded-lg px-4 py-2 flex items-center gap-1'>
        {text}
        {hasMenu && <IoIosArrowDown size={13} className='text-black'/>}
        {hasMenu && <div className='group-hover:block hover:block transition-all delay-300 duration-1000 hidden absolute z-20'>
            <div className='bg-white shadow-md w-48 rounded-lg p-2 absolute top-[18px] -left-4 flex flex-col'>
                {menu && menu.map((item, index) => (
                    <MenuItem key={index} text={item}/>
                ))}
            </div>
        </div>}
    </button>
  )
}

export default NavbarItem