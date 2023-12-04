import React from "react";
import "./header.css";
import Logo from "./Logo/Logo";
import Basket from "./basketGoods/Basket";
import HeaderLine from "./headerLine";
import NavigationBar from "./Nav/Nav";
import { NavLink } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <>
      <HeaderLine />
      <header id="header" className="header">
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
                Сэты
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
