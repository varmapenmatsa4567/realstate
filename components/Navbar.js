import React from 'react'
import Image from 'next/image'
import { MdSearch } from "react-icons/md";
import NavbarItem from './NavbarItem';
import NavbarIconBtn from './NavbarIconBtn';
import { FaRegHeart } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className='flex w-full items-center justify-between'>
        <div className='flex-1 flex items-center gap-4'>
            <Image className='hidden lg:block' src="/image.png" alt="logo" width={110} height={110} />
            <Image className='lg:hidden' src="/logo.png" alt="logo" width={40} height={40} />
            <div className="bg-[#f5f5f5] flex rounded-full px-4 py-3 flex-1 lg:flex-initial lg:w-1/2">
                <input className='bg-transparent flex-1 outline-none text-black' type='text' placeholder='Search'/>
                <MdSearch size={25} className='text-black' />
            </div>
        </div>
        <div className='hidden lg:flex'>
            <NavbarItem text="Buy" hasMenu={true}/>
            <NavbarItem text="Rent" hasMenu={true}/>
            <NavbarItem text="Sell" hasMenu={true}/>
            <NavbarItem text="Blog"/>
            <NavbarItem text="Jobs"/>
            <NavbarIconBtn Icon={FaRegHeart} hasMenu={true}/>
            <NavbarIconBtn Icon={MdNotificationsNone} size={25}/>
            <button className='bg-[#f5f5f5] text-black text-sm px-4 rounded-lg py-2 ml-1'>Sign in</button>
        </div>
        <VscSettings size={40} className='text-black lg:hidden p-2 hover:bg-[#f5f5f5] rounded-full mx-2 cursor-pointer'/>
    </div>
  )
}

export default Navbar