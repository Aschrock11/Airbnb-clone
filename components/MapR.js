import { constants } from "buffer";
import * as React from "react";
import { useState } from "react";
import Map from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function MapR({ searchResult }) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 51.478298,
    longitude: -0.297954,
    zoom: 11,
  });

  const coordinates = searchResult.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const centerCoordinates = getCenter(coordinates);

  console.log(centerCoordinates);

  return (
    <Map
      mapStyle="mapbox://styles/aschrock11/clf1mte1l009b01nz1n4katmn"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(nextViewport) => setViewport(nextViewport.viewport)}
      {...searchResult.map((result) => (
        <div key={result.long}>
          {/* <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          ></Marker> */}
        </div>
      ))}
    ></Map>
  );
}

export default MapR;
