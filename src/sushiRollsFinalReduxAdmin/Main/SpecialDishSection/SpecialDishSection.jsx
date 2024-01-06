import React from "react";
import SpecialDishTitle from "./SpecialDishTitle/SpecialDishTitle";
import SpecialDishMenu from "./SpecialDishMenu/SpecialDishMenu";
const SpecialDishSection = () => {

    return (
       <section className="section">
        <SpecialDishTitle/>
        <SpecialDishMenu/>
       </section>
    )
}
export default SpecialDishSection;