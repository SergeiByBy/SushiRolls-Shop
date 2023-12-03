import React from "react";
import "../Rolls/Rolls.css";
import { Link } from "react-router-dom";
import { GunkansStorage } from "./Gunkan.Storage";
import ButtonBack from "../../ButtonBack/ButtonBack";

const Gunkans = ({addItemToCart}) => {
  return (
    <div className="container">
      <ButtonBack />

      <div className="gunkansBloc">
        <h2 className="RollsTitle">ГУНКАНЫ</h2>
        <div className="gunkans">
          {GunkansStorage.map((item) => {
            return (
              <div className="box" key={item.id}>
                <Link to={item.name}>
                  <div className="box_img">
                    <img className="imgG" src={item.src} alt="img" />
                  </div>
                </Link>
                <div className="box-descr">
                  <span>{item.price} ₽.</span>
                  <h3>{item.name}</h3>
                  <p className="box-descr__structure">{item.structure}</p>

                  <div className="box-descr_button">
                    <button onClick={() => addItemToCart(item)} type="button">В корзину</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Gunkans;
