import React from "react";
import "../Rolls/Rolls.css";
import { useParams, Link } from "react-router-dom";
import { SetsStorage } from "./SetsStorage";
import ButtonBack from "../../ButtonBack/ButtonBack";
import Counter from "../../Cart/Counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../cartSlice";
const SetsDetails = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const nameEl = useParams();
  const setsDetailWithCart = SetsStorage.map((roll) => ({
    ...roll,
    count: cart.find((cartItem) => cartItem.name === roll.name)?.count,
  }));
  const item = setsDetailWithCart.find((element) =>
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
              <Counter item={item} />
            ) : (
              <button
                type="button"
                onClick={() => dispatch(addItemToCart(item))}
              >
                Добавить в корзину
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SetsDetails;
