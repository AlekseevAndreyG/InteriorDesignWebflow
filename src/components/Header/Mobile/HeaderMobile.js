import React, { useRef } from "react";
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
            <a href="http://localhost:3000">Home</a>
          </li>
          <li>
            <a href="http://localhost:3000">Pages</a>
          </li>
          <li>
            <a href="http://localhost:3000">Services</a>
          </li>
          <li>
            <a href="http://localhost:3000">Project</a>
          </li>
          <li>
            <a href="http://localhost:3000">Blog</a>
          </li>
          <li>
            <a href="http://localhost:3000">Contact</a>
          </li>
        </ul>
        <HeaderSocialMobile />
      </div>
    </CSSTransition>
  );
}

export default HeaderMobile;
