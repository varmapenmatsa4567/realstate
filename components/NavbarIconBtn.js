import React from 'react'

const NavbarIconBtn = ({Icon, hasMenu, size}) => {
  return (
    <button className='rounded-full hover:bg-[#f5f5f5] px-2'>
        <Icon size={size ? size : 20} className="text-black"/>
    </button>
  )
}

export default NavbarIconBtn