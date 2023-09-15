import React, { useState } from "react";
import "./AboutLidDesigners.css";

function AboutLidDesigners() {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleDivClick = (divNumber) => {
    setSelectedDiv(selectedDiv === divNumber ? null : divNumber);
  };

  const designers = [
    {
      number: 1,
      name: "Michael Smith",
      country: "USA",
      phone: "+1 (378) 400-1234",
      email: "michael@email.com",
      image: "img/avatar/liders/design1.jpg",
      photo: "img/designer-photo/design1-photo.jpg",
    },
    {
      number: 2,
      name: "Raichel Springfield",
      country: "Australia",
      phone: "+1 (378) 355-1222",
      email: "raichel@email.com",
      image: "img/avatar/liders/design2.jpg",
      photo: "img/designer-photo/design2-photo.jpg",
    },
    {
      number: 3,
      name: "Andrew Garcia",
      country: "Mexico",
      phone: "+1 (378) 307-1119",
      email: "andrew@email.com",
      image: "img/avatar/liders/design3.jpg",
      photo: "img/designer-photo/design3-photo.jpg",
    },
    {
      number: 4,
      name: "Milana Hill",
      country: "Australia",
      phone: "+1 (378) 355-1222",
      email: "milana@email.com",
      image: "img/avatar/liders/design4.jpg",
      photo: "img/designer-photo/design4-photo.jpg",
    },
  ];

  return (
    <section className="about-lid-designers">
      <div className="container">
        <div className="about-lid-designers-wrap">
          <h2>Our leading designers</h2>
          <small>
            To see information about our top specialists, click on the photo
          </small>
          <div className="about-lid-designers-carts">
            {designers.map((designer) => (
              <div
                key={designer.number}
                style={{ backgroundImage: `url(${designer.image})` }}
                className={`lid-designers-cart cart-${designer.number} ${
                  selectedDiv === designer.number ? "selected" : ""
                }`}
                onClick={() => handleDivClick(designer.number)}
              >
                <div
                  className={`column-info ${
                    selectedDiv === designer.number ? "column-info-click" : ""
                  }`}
                >
                  <h3>{designer.name}</h3>
                  <small>Designer {designer.country}</small>
                  <ul className="column-social">
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
                  <a type="tel" href={`tel:${designer.phone}`}>
                    {designer.phone}
                  </a>
                  <a type="mail" href={`mailto:${designer.email}`}>
                    {designer.email}
                  </a>
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
