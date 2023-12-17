import React from "react";
import PatentImg from "./patent.jpg";
import HeroImg from "../HeroSection/heroImg/HeroImg";
import "./patent.style.css";
import PatentText from "./componentPatentText/componentPatentText";
const Patent = (props) => {
  return (
    <>
      <section className="hero_container section healthy_food">
        <HeroImg img={PatentImg} />
        <PatentText />
      </section>
    </>
  );
};
export default Patent;
