import React from "react";
import "../Rolls/Rolls.css";
import { useParams, Link } from "react-router-dom";
import { SushiStorage } from "./Sushi.Storage";
import ButtonBack from "../../ButtonBack/ButtonBack";

const SushiDetails = ({addItemToCart}) => {
 
  const nameEl = useParams();
  const findEl = SushiStorage.find((element) => {
    return element.name === nameEl.name ? element : "";
  });
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
          <div className="dish__parent">
            Входит в состав сета{" "}
            <Link className="dish__parent-link" to="/Sets">
              Премиум сет
            </Link>
          </div>
          <div className="dish__weight">{findEl.weigth} гр.</div>
          <div className="box-descr__details-structure">
            <span>{findEl.price} ₽.</span>
            <button onClick={() => addItemToCart(findEl)} type="button" className=" primary btn">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SushiDetails;
