import React, { useState } from "react";
import "./AboutLidDesigners.css";

function AboutLidDesigners() {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleDivClick = (divNumber) => {
    if (selectedDiv === divNumber) {
      setSelectedDiv(null);
    } else {
      setSelectedDiv(divNumber);
    }
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
            <div
              className={`lid-designers-cart cart-one ${
                selectedDiv === 1 ? "selected" : ""
              }`}
              onClick={() => handleDivClick(1)}
            >
              <img src="img/avatar/liders/design1.jpg" alt="avatar"></img>
              {selectedDiv === 1 && (
                <div className="column-info">
                  <h3>Michael Smith</h3>
                  <small>Designer USA</small>
                  <div className="column-social">
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/facebook.png"
                        alt="facebook icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/twitter.png"
                        alt="twitter icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/instagram.png"
                        alt="instagram icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/linkedin.png"
                        alt="instagram icon"
                      ></img>
                    </a>
                  </div>
                  <a type="tel" href="tel:+13784001234">
                    +1 (378) 400-1234
                  </a>
                  <a type="mail" href="mailto:michael@email.com">
                    michael@email.com
                  </a>
                </div>
              )}
            </div>
            <div
              className={`lid-designers-cart cart-two ${
                selectedDiv === 2 ? "selected" : ""
              }`}
              onClick={() => handleDivClick(2)}
            >
              <img src="img/avatar/liders/design2.jpg" alt="avatar"></img>
              {selectedDiv === 2 && (
                <div className="column-info">
                  <h3>Raichel Springfield</h3>
                  <small>Designer Austrlia</small>
                  <div className="column-social">
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/facebook.png"
                        alt="facebook icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/twitter.png"
                        alt="twitter icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/instagram.png"
                        alt="instagram icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/linkedin.png"
                        alt="instagram icon"
                      ></img>
                    </a>
                  </div>
                  <a type="tel" href="tel:+13784001234">
                    +1 (378) 355-1222
                  </a>
                  <a type="mail" href="mailto:raichel@email.com">
                    raichel@email.com
                  </a>
                </div>
              )}
            </div>
            <div
              className={`lid-designers-cart cart-three ${
                selectedDiv === 3 ? "selected" : ""
              }`}
              onClick={() => handleDivClick(3)}
            >
              <img src="img/avatar/liders/design3.jpg" alt="avatar"></img>
              {selectedDiv === 3 && (
                <div className="column-info">
                  <h3>Andrew Garcia</h3>
                  <small>Designer Mexico</small>
                  <div className="column-social">
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/facebook.png"
                        alt="facebook icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/twitter.png"
                        alt="twitter icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/instagram.png"
                        alt="instagram icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/linkedin.png"
                        alt="instagram icon"
                      ></img>
                    </a>
                  </div>
                  <a type="tel" href="tel:+13784001234">
                    +1 (378) 307-1119
                  </a>
                  <a type="mail" href="mailto:raichel@email.com">
                    Andrew@email.com
                  </a>
                </div>
              )}
            </div>
            <div
              className={`lid-designers-cart cart-four ${
                selectedDiv === 4 ? "selected" : ""
              }`}
              onClick={() => handleDivClick(4)}
            >
              <img src="img/avatar/liders/design4.jpg" alt="avatar"></img>
              {selectedDiv === 4 && (
                <div className="column-info">
                  <h3>Milana Hill</h3>
                  <small>Designer Austrlia</small>
                  <div className="column-social">
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/facebook.png"
                        alt="facebook icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/twitter.png"
                        alt="twitter icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/instagram.png"
                        alt="instagram icon"
                      ></img>
                    </a>
                    <a href="http://localhost:3000">
                      <img
                        src="img/social/linkedin.png"
                        alt="instagram icon"
                      ></img>
                    </a>
                  </div>
                  <a type="tel" href="tel:+13784001234">
                    +1 (378) 355-1222
                  </a>
                  <a type="mail" href="mailto:milana@email.com">
                    milanal@email.com
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutLidDesigners;
