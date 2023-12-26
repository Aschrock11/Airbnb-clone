import { constants } from "buffer";
import * as React from "react";
import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function MapR({ searchResult }) {
  const coordinates = searchResult.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const centerCoordinates = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: centerCoordinates.latitude,
    longitude: centerCoordinates.longitude,
    zoom: 9,
  });

  return (
    <Map
      mapStyle="mapbox://styles/aschrock11/clf1mte1l009b01nz1n4katmn"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(nextViewport) => setViewport(nextViewport.viewport)}
      {...searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={centerCoordinates.longitude}
            latitude={centerCoordinates.latitude}
            color="#61dbfd"
          >
            <img src="./pin.png" />
          </Marker>
          {/* <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <img
              className=" h-10 w-10 "
              src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-pin-icon-and-symbol-isolated-png-image_5045497.jpg"
              alt="pin-icon"
            />
          </Marker> */}
        </div>
      ))}
    ></Map>
  );
}

export default MapR;
