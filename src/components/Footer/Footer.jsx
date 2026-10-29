import React from "react";
import styles from "./Footer.module.css";
// Make sure to install react-icons if you haven't: npm install react-icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="#facebook" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#youtube" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Links Grid */}
        <div className={styles.footerLinks}>
          <ul className={styles.linkColumn}>
            <li>
              <a href="#audio">Audio and Subtitles</a>
            </li>
            <li>
              <a href="#media">Media Center</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          <ul className={styles.linkColumn}>
            <li>
              <a href="#audio-desc">Audio Description</a>
            </li>
            <li>
              <a href="#investor">Investor Relations</a>
            </li>
            <li>
              <a href="#legal">Legal Notices</a>
            </li>
          </ul>
          <ul className={styles.linkColumn}>
            <li>
              <a href="#help">Help Center</a>
            </li>
            <li>
              <a href="#jobs">Jobs</a>
            </li>
            <li>
              <a href="#cookie">Cookie Preferences</a>
            </li>
          </ul>
          <ul className={styles.linkColumn}>
            <li>
              <a href="#gift">Gift Cards</a>
            </li>
            <li>
              <a href="#terms">Terms of Use</a>
            </li>
            <li>
              <a href="#corp">Corporate Information</a>
            </li>
          </ul>
        </div>

        {/* Service Code Button */}
        <button className={styles.serviceCode}>Service Code</button>

        {/* Copyright */}
        <p className={styles.copyright}>&copy; 1997-2024 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
