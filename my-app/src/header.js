import React from 'react'
import "./header.css"
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function header() {
  return (
    <div  className='header'>
    <IconButton>
    <PersonIcon fontSize='large' className='header_icon'/>
    </IconButton>

    <img className='header_logo' src="https://www.pngfind.com/pngs/m/13-131073_this-post-is-a-part-of-tinder-logo.png"></img>

    <IconButton>
    <ForumIcon fontSize='large' className='header_icon'/>
    </IconButton>
    </div>



  );
}

export default header