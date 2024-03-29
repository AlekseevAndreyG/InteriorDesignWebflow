import React, { useEffect } from "react";
import "./AboutHeading.css";
import AOS from "aos";
import "aos/dist/aos.css";
function AboutHeading() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="about-heading">
      <div className="about-heading-bg"></div>
      <div className="about-heading-title">
        <h2>About Us</h2>
        <h6>Home / About Us</h6>
      </div>
      <div className="about-heading-text">
        <div className="about-heading-text-cart">
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

export default AboutHeading;
