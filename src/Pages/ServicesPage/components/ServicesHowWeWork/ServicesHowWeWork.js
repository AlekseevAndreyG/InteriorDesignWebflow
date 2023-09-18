import React from "react";
import Aos from "aos";
import "./ServicesHowWeWork.css";
function ServicesHowWeWork() {
  return (
    <section className="services-how-we-work">
      <div className="container">
        <div className="services-how-we-work-wrap">
          <div className="services-how-we-work-heading">
            <h1 data-aos="fade-left" >How We Work</h1>
            <span data-aos="fade-right">
              It is a long established fact will be distracted.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </span>
          </div>
          <div className="services-how-we-work-carts">
            <div data-aos="fade-up" className="services-how-we-work-cart">
              <img
                className="services-how-we-work-cart-img"
                src="img/services-page/carts/services-concept-details.jpg"
                alt="img"
              ></img>
              <div className="services-how-we-work-cart-wrap">
                <div className="services-how-we-work-cart-title">
                  <img
                    className="services-how-we-work-cart-title-img"
                    src="img/services-page/icon/concept-and-details.svg"
                    alt="img"
                  ></img>
                  <div className="count-cart">01</div>
                </div>
                <div className="services-how-we-work-cart-text">
                  <h2>Concept & Details</h2>
                  <p>
                    It is a long established fact will be distracted. Lorem
                    Ipsum is simply dummy from text of the and typesetting
                    indufstry.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="services-how-we-work-cart">
              <div className="services-how-we-work-cart-wrap">
                <div className="services-how-we-work-cart-title">
                  <img
                    className="services-how-we-work-cart-title-img"
                    src="img/services-page/icon/idea-for-work.svg"
                    alt="img"
                  ></img>
                  <div className="count-cart">02</div>
                </div>
                <div className="services-how-we-work-cart-text">
                  <h2>How We Work</h2>
                  <p>
                    It is a long established fact will be distracted. Lorem
                    Ipsum is simply dummy from text of the and typesetting
                    indufstry.{" "}
                  </p>
                </div>
              </div>
              <img
                className="services-how-we-work-cart-img"
                src="img/services-page/carts/services-idea-for-work.jpg"
                alt="img"
              ></img>
            </div>

            <div data-aos="fade-up" className="services-how-we-work-cart">
              <img
                className="services-how-we-work-cart-img"
                src="img/services-page/carts/services-design.jpg"
                alt="img"
              ></img>
              <div className="services-how-we-work-cart-wrap">
                <div className="services-how-we-work-cart-title">
                  <img
                    className="services-how-we-work-cart-title-img"
                    src="img/services-page/icon/design.svg"
                    alt="img"
                  ></img>
                  <div className="count-cart">03</div>
                </div>
                <div className="services-how-we-work-cart-text">
                  <h2>design</h2>
                  <p>
                    It is a long established fact will be distracted. Lorem
                    Ipsum is simply dummy from text of the and typesetting
                    indufstry.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="services-how-we-work-cart">
              <div className="services-how-we-work-cart-wrap">
                <div className="services-how-we-work-cart-title">
                  <img
                    className="services-how-we-work-cart-title-img"
                    src="img/services-page/icon/perfection.svg"
                    alt="img"
                  ></img>
                  <div className="count-cart">04</div>
                </div>
                <div className="services-how-we-work-cart-text">
                  <h2>Concept & Details</h2>
                  <p>
                    It is a long established fact will be distracted. Lorem
                    Ipsum is simply dummy from text of the and typesetting
                    indufstry.{" "}
                  </p>
                </div>
              </div>
              <img
                className="services-how-we-work-cart-img"
                src="img/services-page/carts/services-perfection.jpg"
                alt="img"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHowWeWork;
