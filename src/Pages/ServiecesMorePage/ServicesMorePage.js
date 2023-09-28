import React from "react";
import "./ServicesMorePage.css";
import ServicesMorePageHeading from "./components/ServicesMorePageHeading/ServicesMorePageHeading";

import OurPartners from "../../components/OurPartners/OurPartners";
import OurPartnersMobile from "../../components/OurPartners/OurPartnersMobile/OurPartnersMobile";
import CounterTotal from "../../components/CounterTotal/CounterTotal";
import ServicesMorePlayer from "./components/ServicesMorePlayer/ServicesMorePlayer";
import ServicesMoreDescr from "./components/ServicesMoreDescr/ServicesMoreDescr";
function ServicesMorePage() {
  return (
    <section className="services-more-page">
      <ServicesMorePageHeading />
      <OurPartners />
      <OurPartnersMobile />
      <ServicesMorePlayer />
      <ServicesMoreDescr />
      <CounterTotal />
    </section>
  );
}

export default ServicesMorePage;
