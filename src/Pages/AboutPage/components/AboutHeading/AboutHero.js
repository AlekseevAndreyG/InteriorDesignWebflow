import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutHero.css";
function AboutHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="about-hero">
      <div className="about-hero-bg"></div>
      <div className="about-hero-title">
        <h2>About Us</h2>
        <p>Home / About Us</p>
      </div>
      <div className="about-hero-text">
        <div className="about-hero-text-cart">
          <img alt="dot img" src="./img/interface/dot.svg"></img>
          <span>
            I like an interior that defies labeling. I don't really want someone
            to walk into a room and know that I did it
          </span>
          <small>-BUNNY WILLIAMS</small>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
