import {  Overlay, Box, Drawer, Group  } from "@mantine/core";
import axios from "axios";
import {FcRating} from 'react-icons/fc'

import React, { useEffect, useState } from "react";
import "./movieDetails.css";
import {
  img_500
} from "../../config/config";

const MovieDetails = ({children, backdrop, image, media_type, id, title, rating, overview,genres }) => {
  const [opened, setOpened] = useState(false);

  const [content, setContent] = useState();
  const [video, setvideo] = useState();
  const fetchImage = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/images?api_key=6bc3d152fb9f35c5d3ab3899a7fb22e5&language=en-US`
    );
    // console.log(data);
    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=6bc3d152fb9f35c5d3ab3899a7fb22e5&language=en-US`
    );
    // console.log(data.results[0]?.key);
    setvideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchImage();
    fetchVideo();
  }, []);
  
  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="bottom"
        size="95%"
        overlayOpacity={0.55}
        overlayBlur={3}
        transitionDuration={1000}
        transitionTimingFunction="ease"
      >
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        height: '45%',
        width: '100%',
        overflow: "hidden",
        color: "white",
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'rgb(15,23,30)',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
       
       <div className="movieimages">
       <img className="imagedetails" alt={title} src={backdrop ? `${img_500}${backdrop}` : `${img_500}${image}`}/>
       </div>
      <Overlay
        gradient={`linear-gradient(90deg, rgba(15,23,30,1) 50%, rgba(15,23,30,0.1) 100%)`}
      />
    </Box> 
    
       <div className="onlytext">
       <div className="movietitle">{title}</div>
       <div className="movierating">IMDB: <FcRating /> {rating}</div>
       <div className="description">{overview}</div>
       <div className="title"></div>
       </div>
            

             
      </Drawer>

      <Group position="center">
        <div style={{height: '500px'}} className="fixed" onClick={() => setOpened(true)}>
         {children}
        </div>
      </Group>
    </>
  );
};

export default MovieDetails;
