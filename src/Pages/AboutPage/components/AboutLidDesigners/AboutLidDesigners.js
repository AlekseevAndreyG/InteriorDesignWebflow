import React, { useState } from "react";
import designersData from "../../../../components/Arrays/DesignersData";
import "./AboutLidDesigners.css";

function AboutLidDesigners() {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleDivClick = (e, divNumber) => {
    e.preventDefault();
    setSelectedDiv(selectedDiv === divNumber ? null : divNumber);
  };

  return (
    <section className="about-lid-designers">
      <div className="container">
        <div className="about-lid-designers-wrap">
          <h2>Our leading designers</h2>
          <small>
            To see information about our top specialists, click on the photo
          </small>
          <div className="about-lid-designers-carts">
            {designersData.map((designer) => (
              <div
                key={designer.number}
                style={{ backgroundImage: `url(${designer.image})` }}
                className={`lid-designers-cart cart-${designer.number} ${
                  selectedDiv === designer.number ? "selected" : ""
                }`}
                onClick={(e) => handleDivClick(e, designer.number)}
              >
                <div
                  className={`column-info ${
                    selectedDiv === designer.number ? "column-info-click" : ""
                  }`}
                >
                  <di className="column-info-text">
                    <h3>{designer.name}</h3>
                    <span>Designer {designer.country}</span>
                  </di>
                  <ul
                    className="column-social"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/facebook.svg"
                        alt="facebook icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/twitter.svg"
                        alt="twitter icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/instagram.svg"
                        alt="instagram icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/linkedin.svg"
                        alt="linkedin icon"
                      ></img>
                    </a>
                  </ul>
                  <div className="column-info-contact">
                    <a
                      type="tel"
                      href={`tel:${designer.phone}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {designer.phone}
                    </a>
                    <a
                      type="mail"
                      href={`mailto:${designer.email}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {designer.email}
                    </a>
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

export default AboutLidDesigners;
