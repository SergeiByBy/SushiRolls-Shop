import "../Cart.style.css";
import React from "react";

const Counter = ({ minusItemFromCart, addItemToCart, itemCount, item }) => {
  console.log(item);
  return (
    <span className="count">
      <span
        onClick={() => minusItemFromCart(item)}
        className="change minus min"
      >
        <span>-</span>
      </span>
      <span className="itemCount">{itemCount}</span>
      <span onClick={() => addItemToCart(item)} className="change plus">
        <span>+</span>
      </span>
    </span>
  );
};

export default Counter;
