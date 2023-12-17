import "../Cart.style.css";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {addItemToCart } from "../../cartSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(state=>state.cart.cart)
  return (
    <span className="count">
      <span
        onClick={() => dispatch(addItemToCart())}
        className="change minus min"
      >
        <span>-</span>
      </span>
      {/* <span className="itemCount">{itemCount}</span> */}
      <h1>{itemCount}</h1>
      <span onClick={() => dispatch(addItemToCart())} className="change plus">
        <span>+</span>
      </span>
    </span>
  );
};

export default Counter;