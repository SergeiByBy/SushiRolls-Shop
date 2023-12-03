import React from "react";
import "./header.css";
import Logo from "./Logo/Logo";
import Basket from "./basketGoods/Basket";
import HeaderLine from "./headerLine";
import NavigationBar from "./Nav/Nav";
const Header = ({ cart }) => {
  return (
    <>
      <HeaderLine />
      <header id="header" className="header">
        <div className="container header_container flex">
          <Logo />
          <NavigationBar />
          <Basket cart={cart} />
          <span class="navbar-toggler-icon"></span>
        </div>
      </header>
    </>
  );
};
export default Header;
