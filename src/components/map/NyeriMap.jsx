import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import ReactMapGL, { Marker, Popup, Source, Layer } from "react-map-gl";
import {
  addPolygonPoint,
  setSelectedCoordinates,
} from "../../store/slices/mapSlice";
import mapConfig from "../../config/Map/mapConfig";
import "mapbox-gl/dist/mapbox-gl.css";

function NyeriMap() {
  const dispatch = useDispatch();
  const { region, polygons, activePolygon } = useSelector((state) => state.map);

  const handleMapClick = (event) => {
    const [lng, lat] = event.lngLat;
    const point = [lat, lng];
    dispatch(addPolygonPoint(point));
    dispatch(setSelectedCoordinates(point));
  };

  const polygonGeoJSON = useMemo(() => {
    const features = polygons.map((poly) => ({
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [poly.coordinates.map(([lat, lng]) => [lng, lat])],
      },
      properties: {},
    }));

    if (activePolygon.length > 1) {
      features.push({
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [activePolygon.map(([lat, lng]) => [lng, lat])],
        },
        properties: {},
      });
    }

    return { type: "FeatureCollection", features };
  }, [polygons, activePolygon]);

  return (
    <Box sx={{ flex: 1, width: "100%]", height: "100%" }}>
      <ReactMapGL
        mapboxAccessToken={mapConfig.mapbox.accessToken}
        mapStyle={mapConfig.mapbox.style}
        initialViewState={{
          longitude: region.center[1],
          latitude: region.center[0],
          zoom: region.zoom,
        }}
        style={{ width: "100%", height: "100%" }}
        onClick={handleMapClick}
        minZoom={mapConfig.region.minZoom}
        maxZoom={mapConfig.region.maxZoom}
      >
        <Marker longitude={region.center[1]} latitude={region.center[0]} />
        <Popup
          longitude={region.center[1]}
          latitude={region.center[0]}
          closeButton={false}
        >
          Nyeri County
        </Popup>

        <Source id="polygons" type="geojson" data={polygonGeoJSON}>
          <Layer
            id="polygon-fill"
            type="fill"
            paint={{ "fill-color": "#4caf50", "fill-opacity": 0.25 }}
          />
          <Layer
            id="polygon-outline"
            type="line"
            paint={{
              "line-color": "#ff9800",
              "line-width": 2,
              "line-dasharray": [6, 6],
            }}
          />
        </Source>
      </ReactMapGL>
    </Box>
  );
}

export default NyeriMap;
