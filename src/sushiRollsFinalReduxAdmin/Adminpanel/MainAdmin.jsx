import React from "react";
import { NavLink } from "react-router-dom";
import "./styleAdmin.css";

const MainAdminPanel = () => {
  return (
    <>
      <div>
        <h1>Выберите раздел с которым нужно совершить чудо</h1>
        <div className="container flex ">
          <div className="header__container">
            <nav>
              <NavLink to="/rollsAdmin" className="navItem nav__linkAdmin">
                Роллы
              </NavLink>
              <NavLink to="/rollsAdmin" className="navItem nav__linkAdmin">
                Гунканы
              </NavLink>
              <NavLink to="/rollsAdmin" className="navItem nav__linkAdmin">
                Суши
              </NavLink>
              <NavLink to="/rollsAdmin" className="navItem nav__linkAdmin">
                Сеты
              </NavLink>
              <NavLink to="/rollsAdmin" className="navItem nav__linkAdmin">
                Соусы
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainAdminPanel;
