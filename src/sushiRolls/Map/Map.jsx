import React from "react";
import "./Map.style.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import Contacts from "../Header/Contacts/Contacts";
const MapComponent = () => {
  const defaultState = {
    center: [54.64712904775127, 39.68543225023872],
    zoom: window.innerWidth < 768 ? 14 : 13,
  };

  return (
    <div className="map">
      <div className="adressMap">
        <Contacts />
      </div>
      <YMaps className="map">
        <Map width={1200} height={500} defaultState={defaultState}>
          <Placemark geometry={[54.658089, 39.648187]} />
        </Map>
      </YMaps>
    </div>
  );
};
export default MapComponent;
