import React from "react";
import { CgMenu } from "react-icons/cg";
import "./BurgerNotActive.css";

function BurgerNotActive({ onBurgerClick }) {
  return <CgMenu onClick={onBurgerClick} className="burger-not-active" />;
}

export default BurgerNotActive;