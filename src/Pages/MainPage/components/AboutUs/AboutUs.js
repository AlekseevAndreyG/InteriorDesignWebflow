import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";
function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section data-aos="fade-up" className="about-us">
      <div className="container">
        <div className="about-us-wrap">
          <div className="about-us-wrap-cart-one">
            <h6 data-aos="fade-right">
              We Create The Art Of Stylish Living Stylishly
            </h6>
            <p data-aos="fade-left">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <div data-aos="fade-right" className="about-us-wrap-call-wrap">
              <button className="about-us-button-call">
                <a href="tel:+4733378901">
                  <img alt="call img" src="img/interface/icon-call.png"></img>
                </a>
              </button>
              <div className="about-us-wrap-call-text">
                <span>
                  <a href="tel:+4733378901">+4733378901</a>
                </span>
                <p>Call Us Anytime</p>
              </div>
            </div>
            <button className="about-us-button-get-started" type="button">
              <p>Get Free Estimate</p>
              <img alt="arrow" src="img/interface/coffe-vector.svg"></img>
            </button>
          </div>
          <div data-aos="fade-left" className="about-us-wrap-cart-two">
            <img alt="img" src="img/about-us-bg.jpg"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
