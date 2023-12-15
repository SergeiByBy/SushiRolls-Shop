import "../Cart.style.css";
import React from "react";

// const Counter = ({ minusItemFromCart, addItemToCart, itemCount, item }) => {
//   return (
//     <span className="count">
//       <span
//         onClick={() => minusItemFromCart(item)}
//         className="change minus min"
//       >
//         <span>-</span>
//       </span>
//       <span className="itemCount">{itemCount}</span>
//       <span onClick={() => addItemToCart(item)} className="change plus">
//         <span>+</span>
//       </span>
//     </span>
//   );
// };

// export default Counter;
import { useDispatch, useSelector } from "react-redux";
import {addItem, delItem } from "../../cartSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(state=>state.cart)
  return (
    <span className="count">
      <span
        onClick={() => dispatch(addItem())}
        className="change minus min"
      >
        <span>-</span>
      </span>
      {/* <span className="itemCount">{itemCount}</span> */}
      <h1>{itemCount}</h1>
      <span onClick={() => dispatch(delItem())} className="change plus">
        <span>+</span>
      </span>
    </span>
  );
};

export default Counter;