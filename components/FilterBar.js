import React from 'react'
import FilterItem from './FilterItem'

const FilterBar = () => {
  return (
    <div className='pt-6 w-screen flex gap-2'>
        <FilterItem text="For Sale"/>
        <FilterItem text="Listing Type"/>
    </div>
  )
}

export default FilterBar