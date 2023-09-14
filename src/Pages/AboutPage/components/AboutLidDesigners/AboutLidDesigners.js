import React from "react";
import "./AboutLidDesigners.css";
function AboutLidDesigners() {
  return (
    <section className="about-lid-designers">
      <div className="container">
        <div className="about-lid-designers-wrap">
          <h2>Our leading designers</h2>
          <small>
            To see information about our top specialists, click on the photo
          </small>
          <div className="about-lid-designers-carts">
            <div сlassName="lid-designers-cart-one">
              <img alt="img"></img>
            </div>
            <div className="lid-designers-cart-two">
              <img alt="img"></img>
            </div>
            <div className="lid-designers-cart-three">
              <img alt="img"></img>
            </div>
            <div className="lid-designers-cart-four">
              <img alt="img"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutLidDesigners;
