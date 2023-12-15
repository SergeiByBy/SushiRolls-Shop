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
import {additem, delItem } from "../../cartSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(state=>state.cart)
  return (
    <span className="count">
      <span
        onClick={() => dispatch(additem())}
        className="change minus min"
      >
        <span>-</span>
      </span>
      <span className="itemCount">{itemCount}</span>
      <span onClick={() => dispatch(delItem())} className="change plus">
        <span>+</span>
      </span>
    </span>
  );
};

export default Counter;