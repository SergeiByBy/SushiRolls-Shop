import React from "react";
import "./HeroTitle.style.css";
import Button from "../../../Button/button";

const HeroTitle = ({ array, title, text }) => {
  return (
    <div className="HeroTitle_box">
      <h1>{title}</h1>
      <p>{text}</p>
      <div className="chefsBox_items list">
        {array ? (
          <ul>
            {array.map((el, index) => {
              return <li key={index}>{el}</li>;
            })}
          </ul>
        ) : null}
      </div>

      <Button buttonText={"Читать подробнее"} text={"Посмотреть меню"} />
    </div>
  );
};
export default HeroTitle;
