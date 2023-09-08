import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurPartnersMobile.css";

const slides = [
  {
    logo: "img/our-clients/modern-home.svg",
  },
  {
    logo: "img/our-clients/vs.svg",
  },
  {
    logo: "img/our-clients/brand.svg",
  },
  {
    logo: "img/our-clients/nature-home.svg",
  },
  {
    logo: "img/our-clients/classic-design-studio.svg",
  },
];

const Slide = ({ imagePath }) => (
  <div className="our-partners-mobil-slide">
    <div
      className="our-partners-mobil-slide-content"
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <img src={imagePath} alt="Slide Image" />
    </div>
  </div>
);

const OurPartnersMobile = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="our-partners-mobile">
      <div className="container">
        <div className="our-partners-mobile-slider-wrap">
          <h3 data-aos="fade-up">
            Our partners
          </h3>
          <Slider
            infinite={true}
            autoplay={true}
            dots={true}
            autoplaySpeed={5000}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            edgeFriction={0.15}
          >
            {slides.map((partner, index) => (
              <Slide key={index} imagePath={partner.logo} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersMobile;
