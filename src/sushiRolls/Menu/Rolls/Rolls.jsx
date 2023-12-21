import React from "react";
import "./Rolls.css";
import { Link } from "react-router-dom";
import { RollsStorage } from "./Rolls.Storage";
import ButtonBack from "../../ButtonBack/ButtonBack";
import Counter from "../../Cart/Counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../cartSlice";

const Rolls = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart)

  // useMemo - performance improovement (useMemo, useCallback)
  const rollsWithCart = RollsStorage.map((roll) => ({
    ...roll,
    count: cart.find((cartItem) => cartItem.name === roll.name)?.count
  }));


  return (
    <div className="container">
      <ButtonBack />
      <div className="rollsBloc">
        <h2 className="RollsTitle">РОЛЛЫ</h2>
        <div className="rolls">
          {rollsWithCart.map((item) => {
            return (
              <div className="box" key={item.id}>
                <Link to={item.name} data-actio={item.id}>
                  <div className="box_img">
                    <img src={item.src} alt="img" />
                  </div>
                </Link>
                <div className="box-descr">
                  <h4>{item.price} ₽.</h4>
                  <h3>{item.name}</h3>
                  <p className="box-descr__structure">{item.structure}</p>
                  <div className="box-descr_button">
                    { item.count !== undefined ? (
                      <Counter item={item} />
                    ) : (
                      <button type="button" onClick={() => dispatch(addItemToCart(item))}>
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
