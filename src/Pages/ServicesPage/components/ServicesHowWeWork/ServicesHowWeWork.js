import React from "react";
import ServicesHowWeWorkData from "../../../../components/Arrays/ServicesHowWeWorkData";
import "./ServicesHowWeWork.css";

const ServicesHowWeWork = () => {
  return (
    <section className="services-how-we-work">
      <div className="container">
        <div className="services-how-we-work-wrap">
          <div className="services-how-we-work-heading">
            <h1>How We Work</h1>
            <span>
              It is a long established fact will be distracted.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </span>
          </div>
          <div className="services-how-we-work-carts">
            {ServicesHowWeWorkData.map((service, index) => (
              <div className="services-how-we-work-cart" key={index}>
                <img
                  className="services-how-we-work-cart-img"
                  src={service.image}
                  alt="img"
                ></img>
                <div className="services-how-we-work-cart-wrap">
                  <div className="services-how-we-work-cart-title">
                    <img
                      className="services-how-we-work-cart-title-img"
                      src={`img/services-page/${service.icon}`}
                      alt="img"
                    ></img>
                    <div className="count-cart">{service.count}</div>
                  </div>
                  <div className="services-how-we-work-cart-text">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHowWeWork;