import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FollowOurProjectMobile.css";
import FollowOurProjectsArray from "../../Arrays/FollowOurProjectsData";

const Slide = ({ background, title, category, subcategory }) => (
  <div className="slide">
    <div
      className="slide-background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="slide-content">
        <div className="slide-content-text">
          <h2 className="slide-title">{title}</h2>
          <p className="slide-subtitle">
            {category} / {subcategory}
          </p>
        </div>
        <button className="slide-button">
          <img src="img/interface/coffe-vector.svg" alt="arrow"></img>
        </button>
      </div>
    </div>
  </div>
);

const FollowOurProjectMobile = () => {
  return (
    <section className="follow-our-projects-mobile">
      <div className="container">
        <div className="slider-container">
          <h3>followour projects</h3>
          <Slider
            arrows={false}
            autoplay={false}
            autoplaySpeed={5000}
            accessibility={false}
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={3}
            focusOnSelect={true}
            edgeFriction={0.15}
            centerMode={true}
            centerPadding="50"
          >
            {FollowOurProjectsArray.map((card, index) => (
              <Slide
                key={index}
                background={card.image}
                title={card.title}
                category={card.category}
                subcategory={card.subcategory}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FollowOurProjectMobile;
