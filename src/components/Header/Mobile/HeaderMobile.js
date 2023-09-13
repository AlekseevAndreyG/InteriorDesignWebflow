import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-page">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/src/Pages/.....">Services</NavLink>
          </li>
          <li>
            <NavLink to="/src/Pages/.....">Project</NavLink>
          </li>
          <li>
            <NavLink to="/src/Pages/.....">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/src/Pages/.....">Contact</NavLink>
          </li>
        </ul>
        <HeaderSocialMobile />
      </div>
    </CSSTransition>
  );
}

export default HeaderMobile;
