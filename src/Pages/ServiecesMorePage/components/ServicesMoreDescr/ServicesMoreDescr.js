import React, { useEffect } from "react";
import AOS from "aos";
import "./ServicesMoreDescr.css";
function ServicesMoreDescr() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="services-more-descr">
      <div className="container">
        <div className="services-more-descr-wrap">
          <div data-aos="fade-up" className="services-more-descr-item-one">
            <div className="services-more-descr-cart">
              <h1 className="services-more-descr-list-title">
                Use of Interior
              </h1>
              <ul className="services-more-descr-list">
                <li>
                  <span className="services-more-descr-list-num">1</span>
                  <p className="services-more-descr-list-text">
                    We provide high quality design services.
                  </p>
                </li>
                <li>
                  <span className="services-more-descr-list-num">2</span>
                  <p className="services-more-descr-list-text">
                    Project on time and Latest Design.
                  </p>
                </li>
                <li>
                  <span className="services-more-descr-list-num">3</span>
                  <p className="services-more-descr-list-text">
                    Scientific Skills For getting a better result.
                  </p>
                </li>
                <li>
                  <span className="services-more-descr-list-num">4</span>
                  <p className="services-more-descr-list-text">
                    Renovations Benefit of Service
                  </p>
                </li>
                <li>
                  <span className="services-more-descr-list-num">5</span>
                  <p className="services-more-descr-list-text">
                    We are confident about our projects.
                  </p>
                </li>
              </ul>
            </div>
            <div className="services-more-descr-line"></div>
            <div className="services-more-descr-cart">
              <h1 className="services-more-descr-list-title">Make An Art</h1>
              <ul className="services-more-descr-list">
                <li>
                  <span className="services-more-descr-list-num">1</span>
                  <p className="services-more-descr-list-text">
                    We provide high quality design services.
                  </p>
                </li>
                <li>
                  <span className="services-more-descr-list-num">2</span>
                  <p className="services-more-descr-list-text">
                    Project on time and Latest Design.
                  </p>
                </li>
                <li>
                  <span className="services-more-descr-list-num">3</span>
                  <p className="services-more-descr-list-text">
                    Scientific Skills For getting a better result.
                  </p>
                </li>
                <li>
                  <span className="services-more-descr-list-num">4</span>
                  <p className="services-more-descr-list-text">
                    Renovations Benefit of Service
                  </p>
                </li>
                <li>
                  <span className="services-more-descr-list-num">5</span>
                  <p className="services-more-descr-list-text">
                    We are confident about our projects.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" className="services-more-descr-item-two">
            <div className="services-more-descr-img">
              <img
                src="img/services-more-page/services-more-page-descr.jpg"
                alt="img"
              ></img>
            </div>
            <div className="services-more-descr-text-wrap">
              <h1 className="services-more-descr-text-title">
                We love design.<br></br>That's how we got here.
              </h1>
              <p className="services-more-descr-text-subtitle">
                It is a long established fact that a reader will be distracted
                by the of readable content .
              </p>
              <button className="services-more-descr-text-button">
                <span>Our Portfolio</span>
                <img
                  src="img/interface/coffe-vector.svg"
                  alt="icon-arrow"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesMoreDescr;
