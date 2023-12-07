import React from "react";
import "./Logo.style.css";
import logo from "./MainLogo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="boxMainLogo">
      <Link to="/">
        <img id="mainLogo" src={logo} alt="logo" />
      </Link>
    </div>
  );
};
export default Logo;
