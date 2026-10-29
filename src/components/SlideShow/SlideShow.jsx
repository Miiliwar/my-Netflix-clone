import React from "react";
import styles from "./SlideShow.module.css";
import MovieCard from "../MovieCard/MovieCard";

// Swiper imports from the screenshot
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Kept your destructured props ('titel')
function SlideShow({ titel, movies }) {
  return (
    <div>
      <h2 className={styles.titel}>{titel}</h2>
      <div className={styles.Row}>
       
      

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={4}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
 
     </div>
    </div>
  );
}

export default SlideShow;
