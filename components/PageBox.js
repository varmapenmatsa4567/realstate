import React from 'react'

const PageBox = ({pageNo, isCurrent, Icon}) => {
  return (
    <div className={`${isCurrent && "bg-[#f5f5f5]"} ${pageNo==null ? "flex":"hidden lg:flex"} cursor-pointer transition-all duration-300 hover:border-black w-14 h-14 border-[#e5e5e5] border-[1px] justify-center items-center rounded-md`}>
        {pageNo}
        {Icon && <Icon className='font-bold' size={25}/>}
    </div>
  )
}

export default PageBox