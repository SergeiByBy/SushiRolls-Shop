import React from "react";
import "../Rolls/Rolls.css";
import { Link } from "react-router-dom";
import { GunkansStorage } from "./Gunkan.Storage";
import ButtonBack from "../../ButtonBack/ButtonBack";
import Counter from "../../Cart/Counter/Counter";

const Gunkans = ({ addItemToCart, cart, minusItemFromCart }) => {
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
                    {cart.find((cartItem) => cartItem.name === item.name) ? (
                      <Counter
                        itemCount={
                          cart.find((cartItem) => cartItem.name === item.name)
                            .count
                        }
                        cart={cart}
                        item={item}
                        addItemToCart={addItemToCart}
                        minusItemFromCart={minusItemFromCart}
                      />
                    ) : (
                      <button type="button" onClick={() => addItemToCart(item)}>
                        Добавить в корзину
                      </button>
                    )}
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
