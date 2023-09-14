import React, { useState } from "react";
import "./AboutCart.css";

function AboutCart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="about-cart">
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={modalImage} alt="modal-img" className="modal-image" />
        </div>
      )}
      <div className="container">
        <div className="about-cart-wrap">
          <div className="about-cart-cat1">
            <div className="about-cart-cat1-item1">
              <h2>What We Do</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <button>
                <span>Our Concept</span>
                <img src="img/interface/coffe-vector.svg" alt="arrow"></img>
              </button>
            </div>
            <div className="about-cart-cat1-item2">
              <img
                src="img/about-page/we-do.jpg"
                alt="img"
                onClick={() => handleImageClick("img/about-page/we-do.jpg")}
              ></img>
            </div>
          </div>
          <div className="about-cart-cat2">
            <div className="about-cart-cat2-item1">
              <h2>The End Result</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <button>
                <span>Our Portfolio</span>
                <img src="img/interface/coffe-vector.svg" alt="arrow"></img>
              </button>
            </div>
            <div className="about-cart-cat2-item2">
              <img
                src="img/about-page/end-result.jpg"
                alt="img"
                onClick={() =>
                  handleImageClick("img/about-page/end-result.jpg")
                }
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCart;
