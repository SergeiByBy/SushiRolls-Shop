import React from "react";
import "../Rolls/Rolls.css";
import { Link } from "react-router-dom";
import { SauseStorage } from "./SauseStorage";
import ButtonBack from "../../ButtonBack/ButtonBack";
import Counter from "../../Cart/Counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../cartSlice";

const Sause = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const sausesWithCart = SauseStorage.map((roll) => ({
    ...roll,
    count: cart.find((cartItem) => cartItem.name === roll.name)?.count,
  }));
  return (
    <div className="container">
      <ButtonBack />
      <div className="rollsBloc">
        <h2 className="RollsTitle">СОУСЫ</h2>
        <div className="rolls">
          {sausesWithCart.map((item) => {
            return (
              <div className="box" key={item.id}>
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
                      />
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
export default Sause;
