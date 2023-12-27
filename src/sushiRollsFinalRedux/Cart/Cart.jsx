import React, { useState, useEffect } from "react";
import "./Cart.style.css";
import ButtonBack from "../ButtonBack/ButtonBack";
import Counter from "./Counter/Counter";
import ModalCart from "./ModalCart/ModalCart";
import { useDispatch, useSelector } from "react-redux";
import { deleteElfromCart } from "../cartSlice";

import PhoneNumberInput from "./PhoneNumberInput/PhoneNumberInput";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const plusElFromCart = cart.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0
  );
  const resetForm = () => {
    setName("");
    setPhoneNumber("");
  };
  const [modalActive, setModalActive] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(name !== "" && phoneNumber !== "");
  }, [name, phoneNumber]);


  return (
    <div className="container">
      <ModalCart
        phoneNumber={phoneNumber}
        name={name}
        active={modalActive}
        setActive={setModalActive}
      />

      <div className="cartBlock">
        <h2 className="RollsTitle">КОРЗИНА</h2>
        <div className="cart">
          <ButtonBack />
          <div className="card mb-5">
            <div className="card-body">
              <h5 className="card-title">Ваш заказ</h5>
              <div
                data-cart-empty
                className="mt-5 mb-5  alert basketTable alert-secondary"
              >
                <div className="cartItemsHeader">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Наименование</th>
                        <th className="cartTableWeigth">Вес</th>
                        <th>Количество</th>
                        <th>Сумма</th>
                        <th>Удалить</th>
                      </tr>
                    </thead>
                  </table>
                </div>
                {cart.length === 0 ? (
                  <h2 className="BasketEmptyDescr">Корзина пуста</h2>
                ) : (
                  cart.map((item) => (
                    <div className="cartItem" key={item.id}>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                className="cartItemImg"
                                src={item.src}
                                alt="imgInCart"
                              />
                            </td>
                            <td>{item.name}</td>
                            <td className="cartTableWeigth">
                              {item.weigth} гр.
                            </td>
                            <td>
                              <Counter item={item} />
                            </td>
                            <td>{item.price * item.count} Р.</td>
                            <td>
                              {" "}
                              <button
                                onClick={() => dispatch(deleteElfromCart(item))}
                                className="btn"
                              >
                                Удалить
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))
                )}
              </div>

              <div className="cart-total">
                <p>
                  <span className="h5">Доставка:</span>{" "}
                  <span className="delivery-cost free">бесплатно</span>{" "}
                </p>
                <p>
                  <span className="h5">Итого:</span>{" "}
                  <span className="total-price">{plusElFromCart}</span>{" "}
                  <span className="rouble">₽</span>
                </p>
              </div>
            </div>

            {cart.length ? (
              <div id="order-form" className="card-body border-top">
                <h5 className="card-title mb-5">Оформить заказ</h5>
                <form>
                  <div className="mb-4 form-group">
                    <label htmlFor="tel">Телефон:</label>
                  <PhoneNumberInput/>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Имя"
                    ></input>
                  </div>
                  <button
                    disabled={!isFormValid}
                    onClick={() => {
                      setModalActive(true);
                      setTimeout(resetForm(), 50);
                    }}
                    type="button"
                    className="btn"
                  >
                    Заказать
                  </button>
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
