import React from "react";
import { useNavigate } from "react-router-dom";
import "../Cart/Cart.style.css";

const ButtonBack = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="container">
          <button onClick={goBack} className="btn btnGoBack primary">
            {" "}
            НАЗАД
          </button>
    </div>
  );
};

export default ButtonBack;
