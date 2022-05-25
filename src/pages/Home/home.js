import axios from 'axios';
import React, {useState , useEffect} from 'react';
import Content from '../../components/Content/Content';
import Pages from '../../components/pages/pages';
import './home.css';

const Home = () => {    

    const[page, setpage] = useState(1);
    const[content, setContent] = useState([]);
    const fetchTrendingData = async () => {
       const {data } = await axios.get(
         `https://api.themoviedb.org/3/trending/all/day?api_key=6bc3d152fb9f35c5d3ab3899a7fb22e5&page=${page}`
       );
      //  console.log(data.results);

   setContent(data.results)      
};

    useEffect(()=> {
      window.scroll(0,0);
        fetchTrendingData();
    }, [page]);
   console.log(content.backdrop_path);
  return (
    <div>
        <span className="pageTitle">Trending</span>
        <div className='trending'>
            {
                content && content.map((e) => 
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
            
                    />)
            }
        </div>
        <Pages setpage={setpage}/>
    </div>
  )
}

export default Home