import React from "react";
import AboutHero from "./components/AboutHeading/AboutHero";
import "./AboutPage.css";
import AboutCart from "./components/AboutCarts/AboutCart";
const AboutPage = () => {
  return (
    <section className="about-page">
      <AboutHero />
      <AboutCart />
    </section>
  );
};
export default AboutPage;
