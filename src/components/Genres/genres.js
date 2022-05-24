import { Chip, Chips } from '@mantine/core'
import axios from 'axios'
import React, { useEffect } from 'react'
// import MovieDetails from '../Details/movieDetails'

const Genres = ({
   type,
   genres,
   setgenres,
   selectedgenres,
   setselectedgenres,
   setpage

}) => {
   const addgenre = (genre) => {
       setselectedgenres([...selectedgenres,genre])
       setgenres(genres.filter((gen) => gen.id !== genre.id));
       setpage(1);
   }

   const removegenre = (genre) => {
       setselectedgenres(
           selectedgenres.filter((gen) => gen.id !== genre.id));
       setgenres([...genres,genre])
       setpage(1);
   }
    const fetchGenres = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=6bc3d152fb9f35c5d3ab3899a7fb22e5&language=en-US`
        )

        setgenres(data.genres)  
        // console.log(data.genres);
    };
   useEffect(() => {
       fetchGenres();
   }, [])
  return (
    <div style={{ padding: "10px 0" }}>
        <Chips variant='filled' color="yellow"   multiple>
         {selectedgenres?.map((genre) => (
            <Chip
            style={{ margin: 2}}
            value ={genre.name}
            key={genre.id}
                onClick ={ (()=> removegenre(genre))}
            >
              {genre.name}
            </Chip>
            ))}

        {genres?.map((genre) => (
            <Chip
            style={{ margin: 2}}
            value ={genre.name}
            key={genre.id}
            onClick ={ (()=> addgenre(genre))}
            >
              {genre.name}
            </Chip>
            ))}
            </Chips>
  </div>
      
  )
}

export default Genres