import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/ImagesForInitialUse/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";
function Header() {
  const [issearchOpen, setissearchOpen] = useState(false);
  const [isprofileOpen, setisprofileOpen] = useState(false);
  // for blur
  const [isScrolled, setisScrolled]=useState(false);
 useEffect(()=>{
  const handelscroll=()=>{
    if(window.scrollY>50){
      setisScrolled(true)
    }else{
      setisScrolled(false)
    }
  }
  window.addEventListener('scroll',handelscroll);
  return()=>window.removeEventListener('scroll',handelscroll)
 },[])
//  useEffect(()=>{
//   //code
//   return()=>{

//   }
//  })

  return (
    <header className={`${styles.header} ${isScrolled? styles.scrolled:""}`}>
      <div className={styles.Container}>
        {/*logo*/}
        <img className={styles.logo} src={logo} alt="Logo" />
        {/*nav links*/}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/tv-shows">
            TV Shows
          </Link>
          <Link className={styles.navLink} to="/home">
            Home
          </Link>
          <Link className={styles.navLink} to="/movies">
            Movies
          </Link>
          <Link className={styles.navLink} to="/new-popular">
            New & Popular
          </Link>
          <Link className={styles.navLink} to="/my-list">
            My List
          </Link>
          <Link className={styles.navLink} to="/browse-language">
            Browse by language
          </Link>
        </nav>

        {/*right side icons*/}
        <div className={styles.rightsection}>
          {/*search icon*/}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setissearchOpen(!issearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>
            {issearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                ClassName={styles.searchinput}
              />
            )}
          </div>

          {/*Notifications*/}

          <button className={styles.iconButton}>
            {/*Notifications icon*/}
            <Bell size={20} />
            <span className={styles.notifcationbadge}>4</span>
          </button>

          {/*profile*/}

          <div className={styles.profileContainer}>
            <button
              onClick={() => setisprofileOpen(!isprofileOpen)}
              className={styles.profileButton}
            >
              {/*user icon*/}
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              <ChevronDown size={20} />

              {/*dropdown  icon*/}
            </button>
            {isprofileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem}>Account</Link> <br />
                <Link className={styles.profileMenuItem} >help Centere</Link>
                <hr className={styles.profileMenuDivider}/>
                <button>sign out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
