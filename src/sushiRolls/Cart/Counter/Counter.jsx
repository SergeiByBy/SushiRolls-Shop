import "../Cart.style.css";
import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, deleteFromToCart } from "../../cartSlice";

const Counter = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <span className="count">
      <span
        onClick={() => dispatch(deleteFromToCart(item))}
        className="change minus min"
      >
        <span>-</span>
      </span>
      <span className="itemCount">{item.count}</span>
      <span
        onClick={() => dispatch(addItemToCart(item))}
        className="change plus"
      >
        <span>+</span>
      </span>
    </span>
  );
};

export default Counter;
