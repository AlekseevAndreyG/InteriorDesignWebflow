import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OurPartnersData from "../../../../components/Arrays/OurPartnersData";

import "./OurPartners.css";

function OurPartners() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section data-aos="fade-up" className="our-partners">
      <div className="container">
        <div className="our-partners-wrap">
          {OurPartnersData.map((partner, index) => (
            <img
              сlassName="our-partners-img"
              key={index}
              src={partner.logo}
              alt="Partner"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
