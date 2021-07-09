// Component created to implement social media in our platform

import React from "react";
import './socialfollow.styles.scss';

// Importing fontawesomeicon component from react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing the social media required
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


// Declaring functional component
const SocialFollow = () => {
  return (
    <div class="social-container">
        <a href="https://www.facebook.com" 
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook}  />
        </a>
        <a href="https://www.youtube.com/"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube}  />
        </a>
        <a href="https://www.instagram.com"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram}  />
        </a>
        <a href="https://twitter.com/"
            className="twitter social">
            <FontAwesomeIcon icon={faTwitter}  />
        </a>
    </div>
  );
}

export default SocialFollow;