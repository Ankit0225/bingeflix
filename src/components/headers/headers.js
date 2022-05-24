import React, { useState } from 'react';
import './header.css';
import {FaHome, FaVideo,FaTv, FaRegUserCircle,FaSearch} from 'react-icons/fa';
import {Button} from '@mantine/core';
import {useNavigate} from 'react-router-dom'


const Header = ({search, setSearch}) => {
  const navigate = useNavigate();
  // const page = useState(0);
  return (
   <>
    <div className='headers'>
      <div className='logo' onClick={() => navigate('/')}></div>
      <div className='category'>       
           <div className='group'>
             <input value={search} onChange={(e) => setSearch(e.target.value)} className='input' placeholder='Search'/>
           <Button onClick={() => navigate('/search')}><FaSearch /></Button>
           </div>
        <div onClick={() => navigate('/')} className='Movies Home'>
          <FaHome />
         <div className='show'> Home </div>
        </div>
        <div onClick={()=> navigate('/movies')} className='Movies'>
          <FaVideo />
          <div className='show'> Movies </div>
        </div>
        <div onClick={()=> navigate('/series')} className='Movies'>
         <FaTv /> 
         <div className='show'> TV Series </div>
        </div>
        <div onClick={()=> navigate('/profile')} className='Movies'>
          <FaRegUserCircle />
         <div className='show'>Profile</div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Header;