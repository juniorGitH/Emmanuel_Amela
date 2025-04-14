/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/jr2.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img 
        className="background" 
        src={image} 
        alt="" 
        style={{
          objectPosition: "center 30%", // Déplace l'image vers le bas
          objectFit: "cover"
        }}
      />
      <div className="home-content" style={{ 
        position: "absolute", 
        top: "5rem", 
        left: "2rem", 
        maxWidth: "90%",
        width: "auto",
        padding: "1rem",
      }}>
        <h1 style={{ 
          fontSize: "clamp(1.5rem, 6vw, 3rem)",
          marginBottom: "0.5rem"
        }}>{name}</h1>
        <h2 style={{
          fontSize: "clamp(1rem, 4vw, 2rem)"
        }}>{title}</h2>
      </div>
      <div style={{ 
        position: "absolute", 
        bottom: "3rem", 
        left: "50%", 
        transform: "translateX(-50%)",
      }}>
        <a href="#about">
          <img 
            src={arrowSvg} 
            style={{ 
              height: "clamp(2rem, 5vw, 3rem)", 
              width: "clamp(2rem, 5vw, 3rem)" 
            }} 
            alt={imageAltText} 
          />
        </a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;