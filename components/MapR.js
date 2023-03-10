import { constants } from "buffer";
import * as React from "react";
import { useState } from "react";
import Map from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function MapR({ searchResult }) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });
  // Transform the search results into the {latitiude: 34.345235, longitude: 53.4565464}
  const coordinates = searchResult.map((result) => ({
    logitude: result.long,
    latitude: result.lat,
  }));
  console.log(coordinates);
  const center = getCenter(coordinates);
  console.log(center);
  return (
    <Map
      mapStyle="mapbox://styles/aschrock11/clf1mte1l009b01nz1n4katmn"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onClick={(nextViewport) => setViewport(nextViewport)}
      // onViewportChange
    ></Map>
  );
}

export default MapR;
