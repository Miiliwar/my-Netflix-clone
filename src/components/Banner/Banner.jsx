import React, { useState, useEffect } from "react";
import NetflixBannerlogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";
import { movieInstance } from "../../Utility/movieinstanc";
import requests from "../../Utility/requestURL";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      try {
        const request = await movieInstance.get(requests.fetchNetflixOriginals);
        setBannerImage(
          // Fixed the math so it doesn't pick a negative index
          request.data.results[
            Math.floor(Math.random() * (request.data.results.length - 1))
          ],
        );
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    }
    fetchBannerImage();
  }, []);

  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        // Changed poster_path to backdrop_path (better for wide banners), with a fallback to poster_path
        backgroundImage: `url("${BANNER_BASE}${bannerImage?.backdrop_path || bannerImage?.poster_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.contents}>
        {/* netflix image */}
        <img
          className={styles.logoImg}
          src={NetflixBannerlogo}
          alt="netflix logo"
        />

        {/* title - Now dynamic based on the movie fetched! */}
        <h1 className={styles.title}>
          {bannerImage?.title ||
            bannerImage?.name ||
            bannerImage?.original_name}
        </h1>

        {/* description - Now dynamic! */}
        <h3 className={styles.description}>{bannerImage?.overview}</h3>

        {/* Button */}
        <div className={styles.buttoncontainer}>
          <button className={styles.button}>
            <Play size={30} />
            Play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>

      {/* fading */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
}

export default Banner;
