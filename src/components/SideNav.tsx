import React from 'react';


import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';


function SideNav() {
  return (
    <div>
      <div className='w-[275px] grid grid-row gap-8'>
        <img src='images/logo.png' alt='logo' width='22px' height='22px'/>
        <Typography><HomeIcon className='svg_icons'></HomeIcon>Home</Typography>
        <Typography><TagIcon className='svg_icons'></TagIcon>Explore</Typography>
        <Typography><NotificationsNoneOutlinedIcon className='svg_icons'></NotificationsNoneOutlinedIcon>Notifications</Typography>
        <Typography><EmailOutlinedIcon className='svg_icons'></EmailOutlinedIcon>Messages</Typography>
        <Typography><BookmarkBorderOutlinedIcon className='svg_icons'></BookmarkBorderOutlinedIcon>Bookmarks</Typography>
        <Typography><ListAltOutlinedIcon className='svg_icons'></ListAltOutlinedIcon>Lists</Typography>
        <Typography><PersonOutlineOutlinedIcon className='svg_icons'></PersonOutlineOutlinedIcon>Profile</Typography>
        <Typography><MoreHorizRoundedIcon className='svg_icons'></MoreHorizRoundedIcon>More</Typography>        

        <button className="bg-XBlue hover:bg-red-500 text-white py-2 px-4 rounded-full">
          Tweet
        </button>
      </div>

      <div className='flex mt-10'>
        <img src='images/avatar.png' alt='avatar' width='50px' className='avatar'/>
        <div className='flex'>
          <div className='ml-4'>
            <Typography>Bradley Ortiz</Typography>
            <Typography mt={-1} ml={0}>@bradley_</Typography>
          </div>
          <MoreHorizRoundedIcon />
          
        </div>
      </div>
    </div>
  )
}

export default SideNav;