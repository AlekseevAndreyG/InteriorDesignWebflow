import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
function Footer() {
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
                <img
                  src="../../../public/img/social/facebook.png"
                  alt="facebook icon"
                ></img>
              </a>
              <a href="http://localhost:3000">
                <img
                  src="../../../public/img/social/twitter.png"
                  alt="twitter icon"
                ></img>
              </a>
              <a href="http://localhost:3000">
                <img
                  src="../../../public/img/social/linkedin.png"
                  alt="linkedin icon"
                ></img>
              </a>
              <a href="http://localhost:3000">
                <img
                  src="../../../public/img/social/instagram.png"
                  alt="instagram icon"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
