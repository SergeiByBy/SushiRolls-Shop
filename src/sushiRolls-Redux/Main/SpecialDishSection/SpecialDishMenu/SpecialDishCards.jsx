import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Button/button";
import { SpecialDishStorage } from "./SpecialDishStorage";
const SpecialDishCards = (props) => {
  return (
    <>
      {SpecialDishStorage.map((el) => {
        return (
          <div key={el.id} className="SpecialDishMenu_card">
            <Link key={el.id} to="/sets">
              <div className="SpecialDishMenu_img">
                <img src={el.src} alt="SpecialDishMenu_img1" />
              </div>
            </Link>
            <div className="SpecialDishMenu_descr">
              <h3 className="SpecialDishMenu_title">{el.name}</h3>
              <p className="SpecialDishMenu_descr">{el.structure}</p>
              <div className="SpecialDishMenu_pay">
                <p className="SpecialDishMenu_price">{el.price}</p>
                <h3>{el.priceNew}</h3>

                <Button text={"Посмотреть меню"} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default SpecialDishCards;
