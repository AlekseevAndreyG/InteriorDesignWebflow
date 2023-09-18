import React from "react";
import "./AboutPage.css";
import AboutHeading from "./components/AboutHeading/AboutHeading";
import AboutCart from "./components/AboutCarts/AboutCart";
import AboutCartMobile from "./components/AboutCarts/AboutCartMobile/AboutCartMobile";
import AboutLidDesigners from "./components/AboutLidDesigners/AboutLidDesigners";
import AboutSendOffer from "./components/AboutSendOffer/AboutSendOffer";
const AboutPage = () => {
  return (
    <section className="about-page">
      <AboutHeading />
      <AboutCart />
      <AboutCartMobile />
      <AboutLidDesigners />
      <AboutSendOffer />
    </section>
  );
};
export default AboutPage;
