import React from "react";
import "../Rolls/Rolls.css";
import { useParams } from "react-router-dom";
import { GunkansStorage } from "./Gunkan.Storage";
import ButtonBack from "../../ButtonBack/ButtonBack";

const GunkansDetails = ({addItemToCart}) => {
 
  const nameEl = useParams();
  const findEl = GunkansStorage.find((element) =>
    element.name === nameEl.name ? element : ""
  );
  return (
    <div className="container">
      <ButtonBack/>
   
      <div className="box__details">
        <div className="box__details__img">
          <img src={findEl.src} alt="img" />
        </div>
        <div className="box-descr__details">
          <h2>{findEl.name}</h2>

          <div className="box-descr__composition">
            <h4>Состав</h4>
            <p className="">{findEl.structure}</p>
          </div>

          <div className="dish__weight">{findEl.weigth} гр.</div>
          <div className="box-descr__details-structure">
            <span>{findEl.price} ₽.</span>
            <button
              type="button"
              onClick={() => addItemToCart(findEl)}
              className=" primary btn"
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GunkansDetails;
