import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CounterTotalData from "../Arrays/CounterTotalData";
import "./CounterTotal.css";

function CounterTotal() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section data-aos="fade-up" className="counter-total">
      <div className="counter-total-wrap">
        {CounterTotalData.map((item, index) => (
          <div className="counter-total-wrap-item" key={index}>
            <div className="counter-total-wrap-item-text">
              <h5>{item.counter}</h5>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CounterTotal;
