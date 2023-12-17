import React from "react";

const ModalCart = ({ active, setActive, name, phoneNumber }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="thank-you-message">
        Спасибо за заказ{name}!<br /> В ближайшее время с Вами свяжется оператор
        по телефону{phoneNumber}!
      </div>
    </div>
  );
};

export default ModalCart;
