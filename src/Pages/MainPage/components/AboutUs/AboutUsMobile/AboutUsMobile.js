import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUsMobile.css";
function AboutUsMobile() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section data-aos="fade-up" className="about-us-mobile">
      <div className="container">
        <div className="about-us-wrap-mobile">
          <div className="about-us-wrap-cart-mobile">
            <h6 data-aos="fade-right" className="about-us-wrap-cart-mobile-title">
              We Create The Art Of Stylish Living Stylishly
            </h6>
            <p data-aos="fade-left" className="about-us-wrap-cart-mobile-text">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
          </div>
          <button data-aos="fade-up" className="button-get-started-mobile" type="button">
            <p>Get Free Estimate</p>
            <img alt="arrow" src="img/interface/coffe-vector.svg"></img>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUsMobile;
