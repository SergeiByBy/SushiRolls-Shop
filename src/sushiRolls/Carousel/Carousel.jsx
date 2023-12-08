import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import PremiumRollsCarouselImg1 from "./CommponentCarouselPremium/CommponentCarouselPremium";
import RollsCarousel from "./RollsCarousel/RollsCarousel";
import SweetSaleImg from "./SweetSale/SweetSaleImg";
import "./Carousel.style.css";
import NewRollsCarousel from "./newRollsCarousel/newRollsCarousel";
const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <PremiumRollsCarouselImg1 text="PremiumRollsCarouselImg1" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <RollsCarousel text="RollsCarousel" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <SweetSaleImg text="SweetFoodCarousel" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <NewRollsCarousel text="NewRollsCarousel" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousels;
