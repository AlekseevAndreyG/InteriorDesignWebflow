import React from "react";
import ServicesHeading from "./components/SevicesHeading/ServicesHeading";
import ServicesHowWeWork from "./components/ServicesHowWeWork/ServicesHowWeWork";

function ServicesPage() {
  return (
    <section className="services-page">
      <ServicesHeading />
      <ServicesHowWeWork />
    </section>
  );
}

export default ServicesPage;
