import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "../../components/Content/Content";
import Pages from "../../components/pages/pages";
import Genres from "../../components/Genres/genres";
import setupgenres from "../../Custom/setupgenres";


const Movies = () => {
  const [page, setpage] = useState(1);
  const [content, setContent] = useState([]);
  const [numofpages, setnumofpages] = useState();
  const [genres, setgenres] = useState([]);
  const [selectedgenres, setselectedgenres] = useState([]);
  const genreURL = setupgenres(selectedgenres);

  const fetchmoviedata = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=6bc3d152fb9f35c5d3ab3899a7fb22e5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`
    );
    // console.log(data.results);
    setContent(data.results);
    setnumofpages(data.total_pages);
  };
  useEffect(() => {
    fetchmoviedata();
  }, [genreURL, page]);

  return (
    <>
      <div>
        <span className="pageTitle">Movies</span>
        <Genres
          type="movie"
          genres={genres}
          setgenres={setgenres}
          selectedgenres={selectedgenres}
          setselectedgenres={setselectedgenres}
          setpage={setpage}
        />
        <div className="trending">
          {content &&
            content.map((e) => (
              <Content
                key={e.id}
                id={e.id}
                image={e.poster_path}
                title={e.title || e.name}
                date={e.release_date || e.first_air_date}
                media_type="Movie"
                rating={e.vote_average}
                overview={e.overview}
                backdrop={e.backdrop_path}
                genres={e.genre_ids}
              />
            ))}
        </div>
        {numofpages > 1 ? (
          <Pages setpage={setpage} numofpages={numofpages} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Movies;
