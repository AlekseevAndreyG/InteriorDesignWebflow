import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutCartMobile.css";
function AboutCartMobile() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="about-cart-mobile">
      <div className="container">
        <div className="about-cart-mobile-wrap">
          <div data-aos="fade-up" className="about-cart-mobile-cat1">
            <div className="about-cart-mobile-text">
              <h2 data-aos="fade-right">What We Do</h2>
              <p data-aos="fade-left">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
            </div>
            <div className="about-cart-mobile-img1"></div>
            <button className="about-cart-mobile-button">
              <span>Our Concept</span>
              <img src="img/interface/coffe-vector.svg" alt="arrow"></img>
            </button>
          </div>

          <div data-aos="fade-up" className="about-cart-mobile-cat2">
            <div className="about-cart-mobile-text">
              <h2 data-aos="fade-left">The End Result</h2>
              <p data-aos="fade-right">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
            </div>
            <div className="about-cart-mobile-img2"></div>
            <button className="about-cart-mobile-button">
              <span>Our Concept</span>
              <img src="img/interface/coffe-vector.svg" alt="arrow"></img>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCartMobile;
