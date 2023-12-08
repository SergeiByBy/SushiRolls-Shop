import React from "react";
import "../Rolls/Rolls.css";
import { useParams, Link } from "react-router-dom";
import { SushiStorage } from "./Sushi.Storage";
import ButtonBack from "../../ButtonBack/ButtonBack";
import Counter from "../../Cart/Counter/Counter";

const SushiDetails = ({ addItemToCart, cart, minusItemFromCart }) => {
  const nameEl = useParams();
  const item = SushiStorage.find((element) =>
    element.name === nameEl.name ? element : ""
  );

  return (
    <div className="container">
      <ButtonBack />
      <div className="box__details">
        <div className="box__details__img">
          <img src={item.src} alt="img" />
        </div>
        <div className="box-descr__details">
          <h2>{item.name}</h2>

          <div className="box-descr__composition">
            <h4>Состав</h4>
            <p className="">{item.structure}</p>
          </div>
          <div className="dish__parent">
            Входит в состав сета{" "}
            <Link className="dish__parent-link" to="/Sets">
              Премиум сет
            </Link>
          </div>
          <div className="dish__weight">{item.weigth} гр.</div>
          <div className="box-descr__details-structure">
            <span>{item.price} ₽.</span>
            {cart.find((cartItem) => cartItem.name === item.name) ? (
              <Counter
                itemCount={
                  cart.find((cartItem) => cartItem.name === item.name).count
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
    </div>
  );
};
export default SushiDetails;
