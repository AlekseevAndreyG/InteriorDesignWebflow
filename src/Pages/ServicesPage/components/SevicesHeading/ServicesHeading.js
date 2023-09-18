import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServicesHeading.css";
function ServicesHeading() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="services-heading">
      <div className="services-heading-bg"></div>
      <div className="services-heading-title">
        <h2>About Us</h2>
        <p>Home / About Us</p>
      </div>
      <div className="services-heading-text">
        <div className="services-heading-text-cart">
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

export default ServicesHeading;
