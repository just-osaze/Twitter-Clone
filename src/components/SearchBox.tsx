import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBox() {
  return (
    <div className='relative'>
      <input className="pl-10 bg-gray border border-gray text-gray text-sm rounded-lg focus:ring-XBlue focus:border-Blue w-full p-2.5" placeholder="Search" />
      <div className='absolute inset-y-0 pl-3 flex items-center cursor-pointer'>
        <SearchOutlinedIcon></SearchOutlinedIcon> 
      </div>
    </div>
  )
}

export default SearchBox;