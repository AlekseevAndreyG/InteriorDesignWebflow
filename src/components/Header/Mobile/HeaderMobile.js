import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./HeaderMobile.css";
import BurgerActive from "./Burger/Active/BurgerActive";
import HeaderSocialMobile from "./HeaderSocialMobile/HSMobile.js";

function HeaderMobile(props) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.isActive}
      timeout={200}
      unmountOnExit
      classNames="header-mobile-anim"
    >
      <div className="header-mobile" ref={nodeRef}>
        <BurgerActive onBurgerClick={props.onBurgerClick} />

        <ul className="header-nav-list-mobile">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-page">About Us</Link>
          </li>
          <li>
            <Link to="/services-page">Services</Link>
          </li>
          <li>
            <Link to="">Project</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
        <HeaderSocialMobile />
      </div>
    </CSSTransition>
  );
}

export default HeaderMobile;
