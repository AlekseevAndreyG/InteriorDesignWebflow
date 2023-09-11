import { useState } from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  const pagesData = {
    isExpanded: false,
    list: ["About Us", "Our Projects", "Our Team", "Contact Us", "Services"],
  };

  const servicesData = {
    isExpanded: false,
    list: ["Kitchan", "Living Area", "Bathroom", "Dinning Hall", "Bedroom"],
  };

  const [pages, setPages] = useState({ ...pagesData });

  const [services, setServices] = useState(servicesData);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
    console.log(isExpanded);
  };
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-wrap-social">
            <Logo />
            <p>
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <div className="footer-wrap-social-icon">
              <a href="http://localhost:3000">
                <img src="img/social/facebook.png" alt="facebook icon"></img>
              </a>
              <a href="http://localhost:3000">
                <img src="img/social/twitter.png" alt="twitter icon"></img>
              </a>
              <a href="http://localhost:3000">
                <img src="img/social/linkedin.png" alt="linkedin icon"></img>
              </a>
              <a href="http://localhost:3000">
                <img src="img/social/instagram.png" alt="instagram icon"></img>
              </a>
            </div>
          </div>
          <div className="footer-wrap-column">
            <div
              className={`footer_column_list ${
                pages.isExpanded ? "expanded" : ""
              }`}
            >
              <ul className="footer_column_list">
                <h5
                  onClick={() => {
                    setPages({
                      ...pages,
                      isExpanded: !pages.isExpanded,
                    });
                  }}
                >
                  Pages
                </h5>
                {pages.list.map((item) => {
                  return (
                    <>
                      <li>
                        <a href="localhost">{item}</a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="footer_object_two_item_services footer_column">
              <ul
                className={`footer_column_list ${
                  services.isExpanded ? "expanded" : ""
                }`}
              >
                <h5
                  onClick={() => {
                    setServices({
                      ...services,
                      isExpanded: !services.isExpanded,
                    });
                  }}
                >
                  Services
                </h5>
                {services.list.map((item) => {
                  return (
                    <>
                      <li>
                        <a href="localhost">{item}</a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="footer-wrap-contact">
            <h5>55 East Birchwood Ave. Brooklyn, New York 11201</h5>
            <a type="mail" href="mailto:contact@interno.com">
              contact@interno.com
            </a>
            <a type="tel" href="tel:1234567890">
              (123) 456 - 7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
