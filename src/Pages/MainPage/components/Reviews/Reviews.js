import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Reviews.css";
import reviewsData from "../../../../components/Arrays/ReviewsData";

function Reviews() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section data-aos="fade-up" className="reviews">
      <div className="container">
        <div className="reviews-wrap">
          <h6 data-aos="fade-up" className="reviews-title">
            What the People Thinks<br></br> About Us
          </h6>
          <div data-aos="fade-up" className="reviews-people-cart-wrap">
            {reviewsData.map((review, index) => (
              <div className="reviews-cart" key={index}>
                <div className="reviews-avatar-wrap">
                  <img src={review.avatar} alt="Avatar" />
                  <div className="reviews-info">
                    <h5>{`${review.firstName} ${review.lastName}`}</h5>
                    <p>{`${review.country}, ${review.city}`}</p>
                  </div>
                </div>
                <p className="review-text">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
