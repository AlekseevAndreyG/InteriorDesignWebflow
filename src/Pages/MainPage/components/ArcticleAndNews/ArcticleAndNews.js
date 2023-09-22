import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ArcticleAndNews.css";
function ArcticleAndNews() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="arcticle-and-news">
      <div className="container">
        <div className="arcticle-and-news-wrap">
          <div className="arcticle-and-news-text">
            <h6 data-aos="fade-right">Articles & News</h6>
            <p data-aos="fade-left">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using.
            </p>
          </div>
          <div className="arcticle-and-news-carts">
            <div data-aos="fade-up" className="arcticle-and-news-item">
              <div className="arcticle-and-news-bg">
                <img
                  className="bg-img"
                  src="img/main-page/arcticle-and-news/kitchan.jpg"
                  alt="img"
                ></img>
                <h1>Kitchan Design</h1>
                <div className="arcticle-and-news-item-text">
                  <span>Let’s Get Solution For Building Construction Work</span>
                  <div className="arcticle-and-news-item-text-wrap">
                    <h3>26 December, 2022</h3>
                    <button>
                      <img
                        className="arcticle-and-news-button-arrow"
                        alt="arrow"
                        src="img/interface/dark-vector.svg"
                      ></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="arcticle-and-news-item">
              <div className="arcticle-and-news-bg">
                <img
                  className="bg-img"
                  src="img/main-page/arcticle-and-news/living.jpg"
                  alt="img"
                ></img>
                <h1>Living Design</h1>
                <div className="arcticle-and-news-item-text">
                  <span>
                    Low Cost Latest Invented Interior Designing Ideas.
                  </span>
                  <div className="arcticle-and-news-item-text-wrap">
                    <h3>22 December, 2022 </h3>
                    <button>
                      <img
                        className="arcticle-and-news-button-arrow"
                        alt="arrow"
                        src="img/interface/dark-vector.svg"
                      ></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="arcticle-and-news-item">
              <div className="arcticle-and-news-bg">
                <img
                  className="bg-img"
                  src="img/main-page/arcticle-and-news/interior.jpg"
                  alt="img"
                ></img>
                <h1>Interior Design</h1>
                <div className="arcticle-and-news-item-text">
                  <span>Best For Any Office & Business Interior Solution</span>
                  <div className="arcticle-and-news-item-text-wrap">
                    <h3>25 December, 2022 </h3>
                    <button>
                      <img
                        className="arcticle-and-news-button-arrow"
                        alt="arrow"
                        src="img/interface/dark-vector.svg"
                      ></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArcticleAndNews;
