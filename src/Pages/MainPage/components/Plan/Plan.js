import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Plan.css";
function Plan() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section data-aos="fade-up" className="plan">
      <div className="plan-wrap">
        <div className="plan-cart plan-cart-1">
          <h3>Project Plan</h3>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button type="button" className="plan-link-button">
            <a href="http://localhost:3000">Read More</a>
            <img alt="arrow" src="img/interface/coffe-vector.svg"></img>
          </button>
        </div>
        <div className="plan-cart plan-cart-2">
          <h3>Interior Work</h3>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button type="button" className="plan-link-button">
            <a href="http://localhost:3000">Read More</a>
            <img alt="arrow" src="img/interface/coffe-vector.svg"></img>
          </button>
        </div>
        <div className="plan-cart plan-cart-3">
          <h3>Realization</h3>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button type="button" className="plan-link-button">
            <a href="http://localhost:3000">Read More</a>
            <img alt="arrow" src="img/interface/coffe-vector.svg"></img>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Plan;
