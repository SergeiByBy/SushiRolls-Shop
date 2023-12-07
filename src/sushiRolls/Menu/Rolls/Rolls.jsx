import React, { useEffect } from "react";
import "./Rolls.css";
import "../../Cart/Cart.style.css";
import "../../Style/media.style.css";
import { Link } from "react-router-dom";
import { RollsStorage } from "./Rolls.Storage";
import ButtonBack from "../../ButtonBack/ButtonBack";
import Counter from "../../Cart/Counter/Counter";
const Rolls = ({ addItemToCart, cart, minusItemFromCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // function changeItemButtonToCart(item) {
  //   let existItem = cart.find((i) => i.name === item.name);
  //   return existItem;
  //   console.log(existItem);
  // }
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
                  <h4>{item.price} ₽.</h4>
                  <h3>{item.name}</h3>
                  <p className="box-descr__structure">{item.structure}</p>
                  <div className="box-descr_button">
                     {cart.find((cartItem) => cartItem.name === item.name) ? 
                    <Counter/> :  
                   <button type="button" onClick={() => addItemToCart(item)}>
            
                   Добавить в корзину
                 </button> }


                    {/* <button type="button" onClick={() => addItemToCart(item)}>
                      {" "}
                      Добавить в корзину
                    </button> */}
                    {/* {cart.find((cartItem) => cartItem.name === item.name) ? 
                    <button  className="button-green" type="button" onClick={() =>addItemToCart(item) > "Товар в корзине" {item.count} "шт."</button> :  
                    <button type="button" onClick={() =>addItemToCart(item)}> Добавить в корзину</button>} */}
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
