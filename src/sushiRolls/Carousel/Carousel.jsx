import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import PremiumRollsCarouselImg1 from "./CommponentCarouselPremium/CommponentCarouselPremium";
import RollsCarousel from "./RollsCarousel/RollsCarousel";
import SweetSaleImg from "./SweetSale/SweetSaleImg";
import "./Carousel.style.css";
const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <PremiumRollsCarouselImg1 text="dsfs slide" />
        <Carousel.Caption>
          {/* <h3>Счастливые часы с 12.00 до 16.00</h3>
          <p>СКИДКА 20%</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>   
        <RollsCarousel text="Second slide" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <SweetSaleImg text="Third slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
};

export default Carousels; 
