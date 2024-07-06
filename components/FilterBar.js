import React from 'react'
import FilterItem from './FilterItem'

const FilterBar = () => {
  return (
    <div className='pt-6 w-screen gap-2 hidden lg:flex'>
        <FilterItem text="For Sale"/>
        <FilterItem text="Listing Type"/>
    </div>
  )
}

export default FilterBar