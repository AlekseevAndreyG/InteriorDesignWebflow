import React, { useState } from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import HNavLine from "./HNavLine/HNavLine";
import HeaderMobile from "./Mobile/HeaderMobile";
import BurgerNotActive from "./Mobile/Burger/NotActive/BurgerNotActive";
function Header() {
  const [isMobileActive, setMobileActive] = useState(false);

  const handleBurgerClick = () => {
    setMobileActive(true);
  };

  const handleBurgerActiveClick = () => {
    setMobileActive(false);
  };
  return (
    <section className="header">
      <div className="container">
        <div className="header-wrap">
          <Logo />
          <HNavLine />
          <HeaderMobile
            isActive={isMobileActive}
            onBurgerClick={handleBurgerActiveClick}
          />
          {!isMobileActive && (
            <BurgerNotActive onBurgerClick={handleBurgerClick} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
