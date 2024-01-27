import React from "react";
import "./Rolls.css";
import { RollsStorage } from "./Rolls.Storage";
import CardsProduct from "../cardsProduct";
import { useSelector } from "react-redux";

const Rolls = () => {
  const name = "РОЛЛЫ";
  const cart = useSelector((state) => state.cart);

  const rollsWithCount = RollsStorage.map((roll) => ({
    ...roll,
    count: cart.find((cartItem) => cartItem.name === roll.name)?.count,
  }));

  return <CardsProduct name={name} rollsWithCount={rollsWithCount} />;
};
export default Rolls;
