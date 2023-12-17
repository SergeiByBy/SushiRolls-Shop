import { NavLink } from "react-router-dom";
import "./Nav.style.css";

const NavigationBar = () => {
  return (
    <>
      <div className="container flex ">
        <div className="header__container">
          <nav>
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
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
