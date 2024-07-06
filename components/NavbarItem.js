import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const NavbarItem = ({text, hasMenu}) => {
  return (
    <button className='text-black text-sm hover:bg-[#f5f5f5] rounded-lg px-4 py-2 flex items-center gap-1'>
        {text}
        {hasMenu && <IoIosArrowDown size={13} className='text-black'/>}
    </button>
  )
}

export default NavbarItem