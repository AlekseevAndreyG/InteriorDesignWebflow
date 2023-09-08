import React from "react";
import { CgCloseO } from "react-icons/cg";
import "./BurgerActive.css";

function BurgerActive({ onBurgerClick }) {
  return <CgCloseO onClick={onBurgerClick} className="burger-active" />;
}

export default BurgerActive;