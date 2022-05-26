import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Content from '../../components/Content/Content';
import Pages from '../../components/pages/pages'; 
const Movies = ({search,setSearch}) => {
  const [page,setpage] = useState(1);
  const [content,setContent] = useState([]);
  const [numofpages,setnumofpages] = useState();

  
  const fetchSearchData = async () => {
    const {data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=6bc3d152fb9f35c5d3ab3899a7fb22e5&language=en-US&query=${search}&page=${page}&include_adult=false`
      );
      // console.log(data.results);
    setContent(data.results)
    setnumofpages(data.total_pages)
  } 

    useEffect(()=> {
      window.scroll(0,0);
    fetchSearchData();
  },[search,page])
  
  return (
    <>
     <div>
        <span className='pageTitle'>Results {search}</span>
        <div className='trending'>
            {
                content?.map((e) => 
                <Content 
                   key={e.id}
                    id={e.id}
                    image={e.poster_path}
                    title={e.title || e.name} 
                    date={e.release_date || e.first_air_date} 
                    media_type={e.media_type}
                    rating={e.vote_average}
                    overview={e.overview}
                    backdrop={e.backdrop_path}
                    genres={e.genre_ids}
                    />)
            }
        </div>
        {numofpages > 1 ? 
        <Pages setpage={setpage} numofpages={numofpages}/>
        : ""
        }
      </div>
    
    </>
  )
}

export default Movies