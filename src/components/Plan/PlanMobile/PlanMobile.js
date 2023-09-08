import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PlanMobile.css";
import ButtonRM from "./ButtonRM/ButtonRM";

const slides = [
  {
    title: "Project Plan",
    text: "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Interior Work",
    text: "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Realization",
    text: "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
];

const Slide = ({ title, text }) => (
  <div className="plan-mobile-slide">
    <div
      className="plan-mobile-slide-background"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="plan-mobile-slide-content">
        <h2 data-aos="fade-up" className="plan-mobile-slide-title">{title}</h2>
        <p data-aos="fade-up" className="plan-mobile-slide-text">{text}</p>
        <ButtonRM />
      </div>
    </div>
  </div>
);

const PlanMobile = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="plan-mobile">
      <div className="container">
        <div className="plan-mobile-slider-wrap">
          <Slider
            arrows={false}
            autoplay
            autoplaySpeed={5000}
            accessibility
            dots
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            focusOnSelect
            edgeFriction={0.15}
          >
            {slides.map((slide, index) => (
              <Slide key={index} title={slide.title} text={slide.text} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PlanMobile;
