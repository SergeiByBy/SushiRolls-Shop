import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import Contacts from "../Contacts/Contacts";

const BurgerMenu = () => {

  return (
    <div id="menu" className="menu">
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
      <Contacts />
    </div>
  );
};

export default BurgerMenu;
