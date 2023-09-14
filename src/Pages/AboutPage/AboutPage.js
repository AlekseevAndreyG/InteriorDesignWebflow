import React from "react";
import AboutHero from "./components/AboutHeading/AboutHero";
import "./AboutPage.css";
import AboutCart from "./components/AboutCarts/AboutCart";
import AboutCartMobile from "./components/AboutCarts/AboutCartMobile/AboutCartMobile";
import AboutLidDesigners from "./components/AboutLidDesigners/AboutLidDesigners";
const AboutPage = () => {
  return (
    <section className="about-page">
      <AboutHero />
      <AboutCart />
      <AboutCartMobile />
      <AboutLidDesigners />
    </section>
  );
};
export default AboutPage;
