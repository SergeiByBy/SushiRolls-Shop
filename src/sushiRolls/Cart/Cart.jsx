import React from "react";
import "./Cart.style.css";
import ButtonBack from "../ButtonBack/ButtonBack";

const Cart = ({ cart, deleteItemFromCart, summPrices,plusElFromCart,addItemToCart  }) => {
 
  return (
    <div className="container">
      <div className="cartBlock">
        <h2 className="RollsTitle">КОРЗИНА</h2>
        <div className="cart">
          <ButtonBack />
          <div className="card mb-5">
            <div className="card-body">
              <h5 className="card-title">Ваш заказ</h5>
              <div
                data-cart-empty
                className="alert basketTable alert-secondary"
              >
                <div className="cartItemsHeader">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Наименование</th>
                        <th>Вес</th>
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
                    <div className="cartItem" key={item.name}>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                className="cartItemImg"
                                src={item.src}
                                alt=""
                              />
                            </td>

                            <td>{item.name}</td>
                            <td>{item.weigth} гр.</td>
                            <td>
                              <span className="count">
                                {" "}
                                <span  onClick={()=>deleteItemFromCart(item)} className="change minus min">
                                  <span>-</span>
                                </span>
                              <span className="itemCount">{item.count}</span>
                                <span onClick={()=>addItemToCart(item)} className="change plus">
                                  <span>+</span>
                                </span>
                              </span>
                            </td>
                            <td>{item.price} Р.</td>
                            <td>
                              {" "}
                              <button
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
                  <span
                    className="total-price"
                    onChange={() => summPrices(cart)}
                  >
                    0
                  </span>{" "}
                  <span className="rouble">₽</span>
                </p>
              </div>
            </div>
            <div id="order-form" className="card-body border-top">
              <h5 className="card-title">Оформить заказ</h5>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ваш номер телефона"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Заказать
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
