import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-wrap">
        <h6>
          Let Your Home<br></br> Be Unique
        </h6>
        <p className="hero-text">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <button className="hero-button-get-started" type="button">
          <p>Get Started</p>
          <img alt="arrow" src="img/interface/coffe-vector.svg"></img>
        </button>
      </div>
    </section>
  );
}

export default Hero;
