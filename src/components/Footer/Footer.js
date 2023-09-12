import { useState } from "react";
import { Link } from "react-router-dom";
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
            <div
              className={`footer_column_list ${
                isExpandedPages ? "expanded" : ""
              }`}
            >
              <ul className="footer_column_list">
                <h5 onClick={handleToggleExpandPages}>Pages</h5>
                <li>
                  <Link to="/src/Pages/.....">About Us</Link>
                </li>
                <li>
                  <Link to="/src/Pages/.....">Our Projects</Link>
                </li>
                <li>
                  <Link to="/src/Pages/.....">Our Team</Link>
                </li>
                <li>
                  <Link to="/src/Pages/.....">Contact Us</Link>
                </li>
                <li>
                  <Link to="/src/Pages/.....">Services</Link>
                </li>
              </ul>
            </div>
            <div className="footer_object_two_item_services footer_column">
              <ul
                className={`footer_column_list ${
                  isExpandedServices ? "expanded" : ""
                }`}
              >
                <h5 onClick={handleToggleExpandServices}>Services</h5>
                <li>
                  <Link to="/src/Pages/.....">Kitchen</Link>
                </li>
                <li>
                  <Link to="/src/Pages/.....">Living Area</Link>
                </li>
                <li>
                  <Link to="/src/Pages/.....">Bathroom</Link>
                </li>
                <li>
                  <Link to="/src/Pages/.....">Dining Hall</Link>
                </li>
                <li>
                  <Link to="/src/Pages/.....">Bedroom</Link>
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
              (123) 456 - 7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
