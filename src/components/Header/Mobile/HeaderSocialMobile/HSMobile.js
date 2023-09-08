import React, { Component } from "react";
import "./HSMobile.css";
export class HeaderSocialMobile extends Component {
  render() {
    return (
      <div className="header-social-mobile">
        <h5 className="header-social-title-mobile">Follow us</h5>
        <div className="header-social-item-moblie">
          <a href="http://localhost:3000">
            <img src="img/social/facebook.png" alt="facebook icon"></img>
          </a>
          <a href="http://localhost:3000">
            <img src="img/social/instagram.png" alt="instagram icon"></img>
          </a>
          <a href="http://localhost:3000">
            <img src="img/social/twitter.png" alt="twitter icon"></img>
          </a>
          <a href="http://localhost:3000">
            <img src="img/social/linkedin.png" alt="linkedin icon"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default HeaderSocialMobile;
