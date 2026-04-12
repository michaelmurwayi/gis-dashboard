import React, { useEffect, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import {
  addPolygonPoint,
  setSelectedCoordinates,
} from "../../store/slices/mapSlice";

import mapConfig from "../../config/Map/mapConfig";

function NyeriMap() {
  const dispatch = useDispatch();
  const mapContainer = useRef(null);
  const mapRef = useRef(null);

  // 🔥 IMPORTANT: REF FOR LATEST DRAW STATE
  const drawingRef = useRef(false);

  const { region, polygons, activePolygon, isDrawingPolygon, polygonsVisible } =
    useSelector((state) => state.map);

  // ---------------- SYNC REDUX → REF ----------------
  useEffect(() => {
    drawingRef.current = isDrawingPolygon;
  }, [isDrawingPolygon]);

  // ---------------- INIT MAP ----------------
  useEffect(() => {
    if (mapRef.current) return;

    mapboxgl.accessToken = mapConfig.mapbox.accessToken;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapConfig.mapbox.style,
      center: [region.center[1], region.center[0]],
      zoom: region.zoom,
      minZoom: mapConfig.region.minZoom,
      maxZoom: mapConfig.region.maxZoom,
    });

    mapRef.current = map;

    // ---------------- CLICK HANDLER ----------------
    map.on("click", (e) => {
      if (!drawingRef.current) return; // 🔥 FIXED STALE STATE ISSUE

      const { lng, lat } = e.lngLat;

      dispatch(addPolygonPoint([lat, lng]));
      dispatch(setSelectedCoordinates([lat, lng]));
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [dispatch]);

  // ---------------- DISABLE DRAG DURING DRAW ----------------
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (isDrawingPolygon) {
      map.dragPan.disable();
      map.doubleClickZoom.disable();
    } else {
      map.dragPan.enable();
      map.doubleClickZoom.enable();
    }
  }, [isDrawingPolygon]);

  // ---------------- GEOJSON ----------------
  const geojson = useMemo(() => {
    const features = [];

    // saved polygons
    polygons.forEach((p) => {
      if (!p.coordinates || p.coordinates.length < 3) return;

      features.push({
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [p.coordinates.map(([lat, lng]) => [lng, lat])],
        },
      });
    });

    // active polygon
    if (activePolygon.length >= 3) {
      features.push({
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [activePolygon.map(([lat, lng]) => [lng, lat])],
        },
      });
    }

    return {
      type: "FeatureCollection",
      features,
    };
  }, [polygons, activePolygon]);

  // ---------------- UPDATE SOURCE + LAYERS ----------------
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const update = () => {
      const source = map.getSource("polygons");

      if (source) {
        source.setData(geojson);
      } else if (map.isStyleLoaded()) {
        map.addSource("polygons", {
          type: "geojson",
          data: geojson,
        });

        map.addLayer({
          id: "polygon-fill",
          type: "fill",
          source: "polygons",
          paint: {
            "fill-color": "#4caf50",
            "fill-opacity": 0.3,
          },
        });

        map.addLayer({
          id: "polygon-outline",
          type: "line",
          source: "polygons",
          paint: {
            "line-color": "#ff9800",
            "line-width": 2,
          },
        });
      }
    };

    if (map.isStyleLoaded()) {
      update();
    } else {
      map.once("load", update);
    }
  }, [geojson]);

  // ---------------- VISIBILITY ----------------
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const visibility = polygonsVisible ? "visible" : "none";

    ["polygon-fill", "polygon-outline"].forEach((id) => {
      if (map.getLayer(id)) {
        map.setLayoutProperty(id, "visibility", visibility);
      }
    });
  }, [polygonsVisible]);

  // ---------------- RENDER ----------------
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />
    </Box>
  );
}

export default NyeriMap;
