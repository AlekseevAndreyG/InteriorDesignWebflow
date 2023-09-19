import React, { useEffect } from "react";
import OurPartnersData from "../../Arrays/OurPartnersData";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurPartnersMobile.css";

const Slide = ({ imagePath }) => (
  <div className="our-partners-mobil-slide">
    <div
      className="our-partners-mobil-slide-content"
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <img src={imagePath} alt="Slide" />
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
          <Slider
            infinite={true}
            autoplay={true}
            dots={false}
            autoplaySpeed={5000}
            speed={500}
            slidesToShow={2}
            slidesToScroll={1}
            edgeFriction={0.15}
            centerMode={true}
            centerPadding="60"
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  centerPadding: "30",
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: "0",
                  speed: 600,
                  autoplaySpeed: 2500,
                },
              },
            ]}
          >
            {OurPartnersData.map((partner, index) => (
              <Slide key={index} imagePath={partner.logo} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersMobile;
