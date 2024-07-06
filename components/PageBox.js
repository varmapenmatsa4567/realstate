import React from 'react'

const PageBox = ({pageNo, isCurrent}) => {
  return (
    <div className={`${isCurrent && "bg-[#f5f5f5]"} cursor-pointer hover:border-black w-14 h-14 border-[#e5e5e5] border-[1px] flex justify-center items-center rounded-md`}>
        {pageNo}
    </div>
  )
}

export default PageBox