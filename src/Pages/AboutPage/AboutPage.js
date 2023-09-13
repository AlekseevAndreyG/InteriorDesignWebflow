import React from "react";
import AboutHero from "./components/AboutHeading/AboutHero";
import "./AboutPage.css";
import AboutCart from "./components/AboutCarts/AboutCart";
import AboutCartMobile from "./components/AboutCarts/AboutCartMobile/AboutCartMobile";
const AboutPage = () => {
  return (
    <section className="about-page">
      <AboutHero />
      <AboutCart />
      <AboutCartMobile />
    </section>
  );
};
export default AboutPage;
