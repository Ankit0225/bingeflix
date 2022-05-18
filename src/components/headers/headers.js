import React from 'react';
import './header.css';
import {FaHome, FaVideo,FaChild,FaTv} from 'react-icons/fa';
import {Button} from '@mantine/core';
import {useNavigate} from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate();
  return (
   <>
    <div className='headers'>
      <div className='category'>       
            <div class="group">
                <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input placeholder="Search" type="search" class="input" />
          <Button onClick={() => navigate('/search')} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Search</Button>
            </div>
        <div onClick={() => navigate('/')} className='Movies'>
          <FaHome />
         <div> Home </div>
        </div>
        <div onClick={()=> navigate('/movies')} className='Movies'>
          <FaVideo />
          <div> Movies </div>
        </div>
        <div onClick={()=> navigate('/series')} className='Movies'>
         <FaTv /> 
         <div> TV Series </div>
        </div>
        <div onClick={()=> navigate('/kids')} className='Movies'>
          <FaChild />
          <div> Kids </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Header;