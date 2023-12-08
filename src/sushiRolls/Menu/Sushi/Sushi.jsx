import React from "react";
import "../Rolls/Rolls.css";
import { Link } from "react-router-dom";
import { SushiStorage } from "./Sushi.Storage";
import ButtonBack from "../../ButtonBack/ButtonBack";
import Counter from "../../Cart/Counter/Counter";

const Rolls = ({ addItemToCart, cart, minusItemFromCart }) => {
  return (
    <div className="container">
      <ButtonBack />
      <div className="rollsBloc">
        <h2 className="RollsTitle">Суши</h2>
        <div className="rolls">
          {SushiStorage.map((item) => {
            return (
              <div className="box box_sushi" key={item.id}>
                <Link to={item.name}>
                  <div className="box_img">
                    <img src={item.src} alt="img" />
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
export default Rolls;
