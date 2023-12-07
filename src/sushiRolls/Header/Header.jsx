import React from "react";
import "./header.css";
import Logo from "./Logo/Logo";
import Basket from "./basketGoods/Basket";
import HeaderLine from "./headerLine";
import NavigationBar from "./Nav/Nav";
import { NavLink } from "react-router-dom";

const Header = ({ cart }) => {
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
      document.getElementById("header").style.paddingBottom = "25px";
      document.getElementById("header").style.paddingTop = "25px";
      document.getElementById("contactsHeader").style.display = "flex";
    }
  }
  return (
    <>
      <HeaderLine />

      <header id="header" className="header">
        <div id="contactsHeader" className="contactsHeader">
          <div className="phoneHeader">
            <a href="tel:+79956542117">8 (995) 654-21-17 / 8 (900) 609-28-02</a>
          </div>
          <div className="mailHeader">
            <a href="sushiskushai@yandex.ru">
              sushiskushai@yandex.ru - Напишите нам
            </a>
          </div>
          <div className="adressHeader">г. Рязань, ул. Октябрьская, д. 33 </div>
          <div className="deliveryInfoHeader">
            <strong>Доставка 12:00 - 21:30</strong>
          </div>
        </div>
        <div className="container header_container flex">
          <Logo />
          <NavigationBar />
          <Basket cart={cart} />
          <div className=" nav-container">
            <input className="checkbox" type="checkbox" />
            <div className="menu">
              <Logo />
              <NavLink to="/" className="navItem nav__link">
                Главная
              </NavLink>
              <NavLink to="/rolls" className="navItem nav__link">
                Роллы
              </NavLink>
              <NavLink to="/gunkans" className="navItem nav__link">
                Гунканы
              </NavLink>
              <NavLink to="/sushi" className="navItem nav__link">
                Суши
              </NavLink>
              <NavLink to="/sets" className="navItem nav__link">
                Сеты
              </NavLink>
              <NavLink to="/sause" className="navItem nav__link">
                Соусы
              </NavLink>
            </div>
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
