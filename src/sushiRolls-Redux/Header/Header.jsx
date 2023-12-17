import React from "react";
import "./header.css";
import Logo from "./Logo/Logo";
import Basket from "./basketGoods/Basket";
import HeaderLine from "./headerLine";
import NavigationBar from "./Nav/Nav";
import Contacts from "./Contacts/Contacts";
import BurgerMenu from "./Burger/BurgerMenu";

const Header = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementById("header").style.paddingBottom = "5px";
      document.getElementById("header").style.paddingTop = "5px";
      document.getElementById("mainLogo").style.width = "70px";
      document.getElementById("mainLogo").style.height = "70px";
      document.getElementById("contactsHeader").style.display = "none";
    } else {
      document.getElementById("mainLogo").style.width = "100px";
      document.getElementById("mainLogo").style.height = "100px";
      document.getElementById("header").style.paddingBottom = "20px";
      document.getElementById("header").style.paddingTop = "20px";
      document.getElementById("contactsHeader").style.display = "flex";
    }
  }

  return (
    <>
      <HeaderLine />
      <header id="header" className="header">
        <Contacts />
        <div className="container header_container flex">
          <Logo />
          <NavigationBar />
          <Basket />
          <div className=" nav-container">
            <input className="checkbox" type="checkbox" />
            <BurgerMenu />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
