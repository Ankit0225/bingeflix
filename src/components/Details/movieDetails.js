import { Overlay, Box, Drawer, Group, ScrollArea } from "@mantine/core";
import myobj from "../../components/Genres/setupmovies.json";
import axios from "axios";
import { FcRating } from "react-icons/fc";
import Content from "../Content/Content";
import React, { useEffect, useState } from "react";
import "./movieDetails.css";
import { img_500 } from "../../config/config";

const MovieDetails = ({
  children,
  backdrop,
  image,
  media_type,
  id,
  title,
  rating,
  overview,
  genres,
}) => {

 

  const [opened, setOpened] = useState(false);
  const[content, setContent] = useState([]);
  var modelmedia = true;

  const fetchsimiliarmovies = async () => {
    //  const {data } = await axios.get(
    //    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=6bc3d152fb9f35c5d3ab3899a7fb22e5&language=en-US`
    //  );
    //  console.log(data.results);

//  setContent(data.results)
    const formdata = new FormData();
    formdata.append('movie_name',title);
    formdata.append('number_of_recommendations', '10')
    
    // {testing data}
    // movie_name: 'Avengers: Age of Ultron',
    // number_of_recommendations: '10'
    axios({
      method: "post",
      url: "https://bingeflix-backend.herokuapp.com/recommend_movie",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then ( async function (response) {
      //handle success
      let moviedata = []
      console.log(response.data.recommendations,title);
      if(!response.data.recommendations)
      {
        modelmedia=false;
        return false;
      } 
        for(let movie in response.data.recommendations)
        {
          // console.log(movie);
          const {data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${response.data.recommendations[movie].movie_id}?api_key=6bc3d152fb9f35c5d3ab3899a7fb22e5&language=en-US`
          );
          moviedata.push(data)
        }

        // console.log(response.data.recommendations);
        setContent(moviedata);
      })
       
    // console.log(data);
};

const fetchtvseries =  async (media_type) => {
     const {data } = await axios.get(
       `https://api.themoviedb.org/3/${media_type.toLowerCase()}/${id}/similar?api_key=6bc3d152fb9f35c5d3ab3899a7fb22e5&language=en-US`
     );
  
     setContent(data.results);
}
  useEffect(()=> {
    // fetchsimiliarmovies();
    if(media_type === 'movie')
    {
      fetchsimiliarmovies();
      console.log(content);
      if(!modelmedia){
        console.log("Get Movie");
        fetchtvseries(media_type);
      }
    } 
    else
    {
      fetchtvseries(media_type);
  
    }
  },[])
  function getgenre(id) {
    let x = myobj.find((obj) => obj.id === id);
    if (x) return x.name;
    else return null;
  }
  return (
    <>
    
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        height="auto"
        position="bottom"
        size="95%"
        overlayOpacity={0.55}
        overlayBlur={3}
        transitionDuration={1000}
        transitionTimingFunction="ease"
        overflow-y="scroll"
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            height: "80%",
            width: "100%",
            overflow: "hidden",
            color: "white",
            marginLeft: "auto",
            marginRight: "auto",
            background: "rgb(15,23,30)",
          }}
        >
          <div className="onlytext">
          <div className="movietitle">{title}</div>
          <div className="description">{overview}</div>
          <div className="movierating">
            <b>IMDB:</b> <FcRating /> {rating}
          </div>
          {/* Mapping the id with the genre name */}
          <div className="getgenre">
            <b>Genre: </b> 
            {genres?.map((genre) => {
              if (getgenre(genre)) return <div className="displaygenre">{getgenre(genre)}</div>;
              else return null;
            })}
          </div>
        </div>
          <div className="movieimages">
            <img
              className="imagedetails"
              alt={title}
              src={backdrop ? `${img_500}${backdrop}` : `${img_500}${image}`}
            />
          </div>
          <Overlay
            gradient={`linear-gradient(90deg, rgba(15,23,30,1) 50%, rgba(15,23,30,0.1) 100%)`}
          />
        </Box>

        
         
          <div className="test" style={{display: "flex", marginTop: "35%", zIndex: 2000, position: "relative", width: "100%", height: "600px", overflowX: "scroll", overflowY: "scroll"}}>
          
            {
              content && content.map((e) => 
                <Content 
                key={e.id}
                id={e.id}
                image={e.poster_path}
                media_type={e.media_type}
                title={e.title || e.name} 
                overview={e.overview}
                backdrop={e.backdrop_path}
                genres={e.genre_ids}
                  />)
            }
      
          </div>
          
      
      
      </Drawer>

      <Group>
        <div
          style={{ height: "500px" }}
          className="fixed"
          onClick={() => setOpened(true)}
        >
          {children}
        </div>
      </Group>
    </>
  );
};

export default MovieDetails;
