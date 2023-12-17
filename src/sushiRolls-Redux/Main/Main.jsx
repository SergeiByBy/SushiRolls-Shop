import React from "react";
import SpecialDishSection from "./SpecialDishSection/SpecialDishSection";
import HealthyFood from "./HealthyFoodSection/healthyFood";
import ChefsBlock from "./ChefsSection/ChefsSection";
import Carousels from "../Carousel/Carousel";
import Patent from "./PatentSection/PatentComponent";
import MapContainer from "../Map/Map";
const Main = () => {
  return (
    <div className="container">
      <Carousels />
      <SpecialDishSection />
      <HealthyFood />
      <ChefsBlock/>
      <Patent/>
      <MapContainer/>
    </div>
  );
};
export default Main;
