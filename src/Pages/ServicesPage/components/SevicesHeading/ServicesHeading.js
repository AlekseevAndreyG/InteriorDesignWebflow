import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServicesHeading.css";
import ServicesData from "../../../../components/Arrays/ServicesData";

function ServicesHeading() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="services-heading">
      <div className="services-heading-bg"></div>
      <div className="services-heading-title">
        <h1>Services</h1>
        <h6>Home / Services</h6>
      </div>
      <div className="container">
        <div className="services-heading-text-carts">
          {ServicesData.map((ServicesData, index) => (
            <div className="services-heading-text-cart" key={index}>
              <h2>{ServicesData.title}</h2>
              <span>{ServicesData.description}</span>
              <NavLink
                to="/services-more-page"
                className={"services-heading-text-cart-link"}
                type="link"
              >
                <p>Read More</p>
                <img src={ServicesData.image} alt="arrow" />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesHeading;
