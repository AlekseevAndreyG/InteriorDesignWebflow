import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FollowOurProjects.css";
import FollowOurProjectsArray from "../Arrays/FollowOurProjectsData";

function FollowOurProjects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="follow-our-projects">
      <div className="container">
        <div className="follow-our-projects-wrap">
          <div data-aos="fade-up" className="follow-our-projects-text-wrap">
            <h6 className="follow-our-projects-title">Follow Our Projects</h6>
            <p className="follow-our-projects-text">
              It is a long established fact that a reader will be distracted by
              the of readable content of page lookings at its layouts points.
            </p>
          </div>
          <div className="follow-our-projects-cart-wrap">
            {FollowOurProjectsArray.map((card, index) => (
              <div data-aos="fade-up" key={index} className="follow-our-projects-cart">
                <img src={card.image} alt="Project" />
                <div className="follow-our-projects-cart-info">
                  <div className="follow-our-projects-cart-info-category">
                    <h3>{card.title}</h3>
                    <p>
                      {card.category} / {card.subcategory}
                    </p>
                  </div>
                  <button>
                    <img src="img/interface/coffe-vector.svg" alt="arrow"></img>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FollowOurProjects;
