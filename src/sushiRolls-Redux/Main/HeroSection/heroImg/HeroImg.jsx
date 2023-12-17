import React from "react";
import "./HeroImgStyle.css";

const HeroImg = (props) => {
  return (
    <div className="HeroImgBox HeroImgPatent" >
      <img src={props.img} alt="heroImg" />
    </div>
  );
};
export default HeroImg;
