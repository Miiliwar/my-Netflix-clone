import React from "react";
import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
function MovieCard({ movie }) {
  // We removed the hardcoded 'genres' array because it's now in Data.js!

  return (
    <div className={styles.cardWrapper}>
      {/* poster image */}
      <img
        className={styles.poster}
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt={movie.title || movie.name}
      />
      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* img */}
        <img
          className={styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt={`${movie.title} hover`}
        />

        {/* badge - Now using movie.badge */}
        <div className={styles.badge}>{movie.badge}</div>

        {/* button row */}
        <div className={styles.buttonsRow}>
          <FaCirclePlay
            className={styles.circleButtonSmall}
            color="white"
            size={20}
          />
          <BsPlusCircle
            className={styles.circleButtonSmall}
            color="white"
            size={20}
          />
          <GoCheckCircleFill
            className={styles.circleButtonSmall}
            color="white"
            size={20}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={20}
          />
        </div>

        {/* metadata row - Now using movie data */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>{movie.matureRating}</span>
          <span className={styles.tag}>{movie.category}</span>
          <span className={styles.tag}>{movie.quality}</span>
        </div>

        {/* genres - Now mapping through the genres inside the movie object */}
        <div className={styles.genres}>
          {/* Add the ? and the fallback [] so it doesn't crash if undefined */}
          {(movie.genres || movie.genre_ids || [])?.map((g, index, arr) => {
            return (
              <span key={index}>
                {/* If it's a number (from API), you might want to hide it or replace it */}
                {typeof g === "string" ? g : `Genre ${g}`}

                {index < arr.length - 1 && (
                  <span className={styles.dot}>•</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
