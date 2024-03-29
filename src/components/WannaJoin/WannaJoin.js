import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WannaJoin.css";
function WannaJoin() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section data-aos="fade-up" className="wanna-join">
      <div className="container">
        <div className="wanna-join-wrap">
          <div className="wanna-join-text">
            <h2>Wanna join the interno?</h2>
            <p>It is a long established fact will be distracted.</p>
          </div>
          <button>
            <p>Contact With Us</p>
            <img src="img/interface/dark-vector.svg" alt="arrow"></img>
          </button>
        </div>
      </div>
    </section>
  );
}

export default WannaJoin;
