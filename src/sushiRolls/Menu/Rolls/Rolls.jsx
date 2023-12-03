import React, { useEffect } from "react";
import "./Rolls.css";
import "../../Style/media.style.css"
import { Link } from "react-router-dom";
import { RollsStorage } from "./Rolls.Storage";
import ButtonBack from "../../ButtonBack/ButtonBack";

const Rolls = ({ addItemToCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <ButtonBack />
      <div className="rollsBloc">
        <h2 className="RollsTitle">РОЛЛЫ</h2>
        <div className="rolls">
          {RollsStorage.map((item) => {
            return (
              <div className="box" key={item.id}>
                <Link to={item.name} data-actio={item.id}>
                  <div className="box_img">
                    <img src={item.src} alt="img" />
                  </div>
                </Link>
                <div className="box-descr">
                  <span>{item.price} ₽.</span>
                  <h3>{item.name}</h3>
                  <p className="box-descr__structure">{item.structure}</p>
                  <div className="box-descr_button">
                    <button type="button" onClick={() => addItemToCart(item)}>
                      В корзину
                    </button>
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
export default Rolls;
