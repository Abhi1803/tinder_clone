import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function swipebuttons() {
  return (
    <div className='swipebuttons'>
    <IconButton className="swipeButtons_repeat"><ReplayIcon fontSize='large'></ReplayIcon></IconButton>
    <IconButton className="swipeButtons_left"><CloseIcon fontSize='large'></CloseIcon></IconButton>
    <IconButton  className="swipeButtons_star"><ReplayIcon fontSize='large'></ReplayIcon></IconButton>
    <IconButton  className="swipeButtons_right"><StarRateIcon fontSize='large'></StarRateIcon></IconButton>
    <IconButton  className="swipeButtons_star"><FavoriteIcon fontSize='large'></FavoriteIcon></IconButton>
    <IconButton className="swipeButtons_lightning"><FlashOnIcon fontSize='large'></FlashOnIcon></IconButton>
    </div>
  );
}

export default swipebuttons