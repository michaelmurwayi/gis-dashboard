import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Stack } from "@mui/material";
import ReactMapGL, { Marker, Popup, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import NyeriMap from "./NyeriMap";
import {
  addPolygonPoint,
  setSelectedCoordinates,
  startPolygonDrawing,
  removeLastPolygonPoint,
  clearActivePolygon,
  finishPolygonDrawing,
  cancelPolygonDrawing,
} from "../../store/slices/mapSlice";

import mapConfig from "../../config/Map/mapConfig";

const MapPanel = () => {
  const dispatch = useDispatch();

  const { region, polygons, activePolygon, isDrawingPolygon, polygonsVisible } =
    useSelector((state) => state.map);

  // 👉 Add point only when drawing is active
  const handleMapClick = (event) => {
    if (!isDrawingPolygon) return;

    const [lng, lat] = event.lngLat;
    const point = [lat, lng];

    dispatch(addPolygonPoint(point));
    dispatch(setSelectedCoordinates(point));
  };

  // 👉 Close polygon
  const closePolygon = (coords) => {
    if (coords.length < 3) return [];
    return [...coords, coords[0]];
  };

  // 👉 GeoJSON conversion
  const polygonGeoJSON = useMemo(() => {
    if (!polygonsVisible) return null;

    const features = polygons.map((poly) => ({
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          closePolygon(poly.coordinates.map(([lat, lng]) => [lng, lat])),
        ],
      },
    }));

    if (activePolygon.length > 1) {
      features.push({
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            closePolygon(activePolygon.map(([lat, lng]) => [lng, lat])),
          ],
        },
        properties: { active: true },
      });
    }

    return {
      type: "FeatureCollection",
      features,
    };
  }, [polygons, activePolygon, polygonsVisible]);

  return (
    <Box sx={{ width: "100vw", height: "100%", position: "relative" }}>
      {/* 🔵 Controls */}

      <NyeriMap />
    </Box>
  );
};

export default MapPanel;
