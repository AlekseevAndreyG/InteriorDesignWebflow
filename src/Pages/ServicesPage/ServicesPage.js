import React from "react";
import ServicesHeading from "./components/SevicesHeading/ServicesHeading";
import ServicesHowWeWork from "./components/ServicesHowWeWork/ServicesHowWeWork";
import WannaJoin from "../../components/WannaJoin/WannaJoin";

function ServicesPage() {
  return (
    <section className="services-page">
      <ServicesHeading />
      <ServicesHowWeWork />
      <WannaJoin />
    </section>
  );
}

export default ServicesPage;
