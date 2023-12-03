import React from "react";
import HeroImg from "../HeroSection/heroImg/HeroImg";
import Img from "./ChefsFoto.jpeg";
import "./ChefsBlock.style.css";
import HeroTitle from "../HeroSection/heroTitle/HeroTitle";
const ChefsBlock = ({title, array }) => {
  const advantages = [
    "Гарантируем вкуснейшее блюдо",
    "Доставка от 30мин",
    "Приготовлено исключительно из качественных продуктов",
    "Контроль качества приготовления на каждом этапе"
  ];
  return (
    <section className="hero_container section chefsBlock">
      <HeroTitle array={advantages}  title={`Готовят лучшие шеф повара`}/>
      <HeroImg img={Img} />
    </section>
  );
};
export default ChefsBlock;
