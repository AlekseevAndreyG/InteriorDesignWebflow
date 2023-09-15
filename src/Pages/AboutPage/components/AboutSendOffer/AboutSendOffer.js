import React, { useState } from "react";
import "./AboutSendOffer.css";

function AboutSendOffer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь код для отправки письма
    console.log("Имя:", name);
    console.log("Email:", email);
    console.log("Сообщение:", message);
    // Сбросить значения полей формы после отправки
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="about-send-offer">
      <div className="container">
        <h2>
          Creative project?<br></br> Let's have a productive talk.
        </h2>
        <div className="about-send-offer-form">
          <form className="about-send-offer-form" onSubmit={handleSubmit}>
            <div className="about-send-offer-form-fields">
              <div className="form-field form-name">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-field form-email">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-field form-message">
              <label htmlFor="message">Hello I am Interested in..</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">
              <p>Send Now</p>
              <img src="img/interface/coffe-vector.svg" alt="arrow"></img>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AboutSendOffer;
