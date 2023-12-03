import React from "react";
import "./Map.style.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MapComponent = () => {
  const defaultState = {
    center: [54.6269, 39.6916],
    zoom: 12,
  };

  return (
    <div className="map">
      <YMaps className="map">
        <Map width={1200} height={500} defaultState={defaultState}>
          <Placemark geometry={[54.658089, 39.648187]} />
        </Map>
      </YMaps>
    </div>
  );
};
export default MapComponent;
