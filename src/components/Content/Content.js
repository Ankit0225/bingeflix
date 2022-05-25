import React from 'react'

import { img_500,unavailable, unavailableLandscape } from '../../config/config';
import MovieDetails from '../Details/movieDetails';
import './Content.css';
const Content = (
    {
        id,
        image,
        backdrop,
        title,
        date,
        media_type,
        rating,
        overview,  
    }
) => {
  return (
      <>
    <MovieDetails backdrop={backdrop} title={title} rating={rating} media_type={media_type} id={id} overview={overview} image={image}>
        <div className='home'>
         <img className='image' src={image ? `${img_500}${image}` : unavailable} alt={title}/>
         <div className='container'>
          <b className='title'>{title}</b>
            <span className='overview'>{overview}</span>
            <span className='rating'>Rating: {rating}</span>
            <span className='media'>
                {media_type === "tv" ? "TV Series" : "Movie"}
            <span className='date'>{date}</span>
            
            </span>
       </div>
      </div>
    </MovieDetails> 
      </>
  )
}

export default Content