import React from 'react';
import './header.css';
import {FaSearch} from 'react-icons/fa';
import {Button} from '@mantine/core';
import {useNavigate} from 'react-router-dom'
import {ReactComponent as HomeSvg} from '../../images/home.svg'
import {ReactComponent as TVSeries} from '../../images/tvseries.svg'
import {ReactComponent as Profile} from '../../images/profile.svg'
import {ReactComponent as Cinema} from '../../images/movies.svg'

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
           <div className='icon'>
             <HomeSvg/>
           </div>
         <div className='show'> Home </div>
        </div>
        <div onClick={()=> navigate('/movies')} className='Movies'>
        <div className='icon'>
             <Cinema />
           </div>
          <div className='show'> Movies </div>
        </div>
        <div onClick={()=> navigate('/series')} className='Movies'>
        <div className='icon'>
             <TVSeries/>
           </div>
         <div className='show'> TV Series </div>
        </div>
        <div onClick={()=> navigate('/profile')} className='Movies'>
        <div className='icon'>
             <Profile />
           </div>
         <div className='show'>Profile</div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Header;