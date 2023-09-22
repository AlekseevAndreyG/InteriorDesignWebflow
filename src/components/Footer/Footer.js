import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Logo from "../Logo/Logo";

function Footer() {
  const [isExpandedPages, setIsExpandedPages] = useState(false);
  const [isExpandedServices, setIsExpandedServices] = useState(false);

  const handleToggleExpandPages = () => {
    setIsExpandedPages(!isExpandedPages);
  };

  const handleToggleExpandServices = () => {
    setIsExpandedServices(!isExpandedServices);
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
            <div className="footer_column">
              <ul
                className={`footer_column_list ${
                  isExpandedPages ? "expanded" : ""
                }`}
              >
                <h5 onClick={handleToggleExpandPages}>Pages</h5>
                <li>
                  <NavLink to="/about-page">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="">Our Projects</NavLink>
                </li>
                <li>
                  <NavLink to="">Our Team</NavLink>
                </li>
                <li>
                  <NavLink to="">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="">Services</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer_column">
              <ul
                className={`footer_column_list ${
                  isExpandedServices ? "expanded" : ""
                }`}
              >
                <h5 onClick={handleToggleExpandServices}>Services</h5>
                <li>
                  <NavLink to="">Kitchen</NavLink>
                </li>
                <li>
                  <NavLink to="">Living Area</NavLink>
                </li>
                <li>
                  <NavLink to="">Bathroom</NavLink>
                </li>
                <li>
                  <NavLink to="">Dining Hall</NavLink>
                </li>
                <li>
                  <NavLink to="">Bedroom</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-wrap-contact">
            <h5>55 East Birchwood Ave. Brooklyn, New York 11201</h5>
            <a type="mail" href="mailto:contact@interno.com">
              contact@interno.com
            </a>
            <a type="tel" href="tel:1234567890">
              +7(123) 456 - 7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
