import React from "react";
import HeroImg from "../HeroSection/heroImg/HeroImg";
import HealthyFoodImg from "./HealthyFoodImg/healthyFood2.png";
import HeroTitle from "../HeroSection/heroTitle/HeroTitle";
import "./HealthyFood.style.css";
const HealthyFood = (props) => {
  return (
    <section className="hero_container section healthy_food">
      <HeroImg img={HealthyFoodImg} />
      <HeroTitle
        title={`Попробуйте нашу новинку - Королевский Сет`}
        text={
          "Такао, Дракон, Сурими с креветкой, Император с лососем, Калифорния с крабом, Унаги урамаки, Урамаки с жареным лососем, Ролл в черной масаго, Хосомаки с печёным лососем"
        } 
      />
    </section>
  );
};
export default HealthyFood;
