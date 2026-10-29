import React, { useState, useEffect } from "react";
import styles from "./DisplyRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import { movieInstance } from "../../Utility/movieinstanc";
import requests from "../../Utility/requestURL";

function DisplyRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        docRes,
      ] = await Promise.all([
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchHorrorMovies),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchDocumentaries),
      ]);

      setMovies({
        trending: trendingRes.data.results,
        netflixOriginals: netflixRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: docRes.data.results,
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // useEffect to run fetchMovies once when the component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.mainWrapper}>
      {/* 
        Pass the specific arrays to each SlideShow.
        I updated the titles to match the data you are fetching!
      */}
      <SlideShow titel="Trending Now" movies={movies.trending} />
      <SlideShow titel="Netflix Originals" movies={movies.netflixOriginals} />
      <SlideShow titel="Top Rated" movies={movies.topRated} />
      <SlideShow titel="Action Movies" movies={movies.action} />
      <SlideShow titel="Comedy Movies" movies={movies.comedy} />
      <SlideShow titel="Horror Movies" movies={movies.horror} />
      <SlideShow titel="Romance Movies" movies={movies.romance} />
      <SlideShow titel="Documentaries" movies={movies.documentaries} />
    </div>
  );
}

export default DisplyRow;
