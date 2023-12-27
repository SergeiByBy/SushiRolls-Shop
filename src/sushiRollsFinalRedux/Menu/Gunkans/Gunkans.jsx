import React from "react";
import "../Rolls/Rolls.css";
import { Link } from "react-router-dom";
import { GunkansStorage } from "./Gunkan.Storage";
import ButtonBack from "../../ButtonBack/ButtonBack";
import Counter from "../../Cart/Counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../cartSlice";

const Gunkans = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const gunkanssWithCart = GunkansStorage.map((roll) => ({
    ...roll,
    count: cart.find((cartItem) => cartItem.name === roll.name)?.count,
  }));

  return (
    <div className="container">
      <ButtonBack />

      <div className="gunkansBloc">
        <h2 className="RollsTitle">ГУНКАНЫ</h2>
        <div className="gunkans">
          {gunkanssWithCart.map((item) => {
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
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Gunkans;
