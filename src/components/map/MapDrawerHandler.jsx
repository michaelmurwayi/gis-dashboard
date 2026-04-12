import React, { useEffect, useRef } from "react";
import { FeatureGroup, useMap } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useDispatch, useSelector } from "react-redux";
import L from "leaflet";
import "leaflet-draw/dist/leaflet.draw.css";

import { addPolygon, disablePolygonDrawing } from "../slices/polygonSlice";
import { selectIsPolygonDrawingEnabled } from "../selectors/polygonSelectors";

const MapDrawHandler = () => {
  const dispatch = useDispatch();
  const map = useMap();

  const isDrawingEnabled = useSelector(selectIsPolygonDrawingEnabled);
  const featureGroupRef = useRef(null);
  const drawControlRef = useRef(null);

  // Helper: calculate approximate polygon area in hectares
  const calculatePolygonAreaHectares = (latlngs) => {
    try {
      const latLngArray = latlngs[0] || latlngs;
      const areaInSquareMeters = L.GeometryUtil.geodesicArea(latLngArray);
      const areaInHectares = areaInSquareMeters / 10000;
      return Number(areaInHectares.toFixed(2));
    } catch (error) {
      return null;
    }
  };

  // Programmatically trigger polygon draw mode when Redux says so
  useEffect(() => {
    if (!isDrawingEnabled || !drawControlRef.current) return;

    const toolbar = drawControlRef.current?._toolbars?.draw;
    const polygonHandler = toolbar?._modes?.polygon?.handler;

    if (polygonHandler && !polygonHandler.enabled()) {
      polygonHandler.enable();
    }

    // Optional: disable map dragging while drawing for better UX
    map.dragging.disable();

    return () => {
      map.dragging.enable();
    };
  }, [isDrawingEnabled, map]);

  const handleCreated = (event) => {
    const { layerType, layer } = event;

    if (layerType !== "polygon") return;

    const latlngs = layer.getLatLngs();

    const polygonCoordinates = (latlngs[0] || []).map((point) => [
      point.lat,
      point.lng,
    ]);

    const newPolygon = {
      id: `poly-${Date.now()}`,
      name: `AOI ${Date.now()}`,
      coordinates: polygonCoordinates,
      area: calculatePolygonAreaHectares(latlngs),
      createdAt: new Date().toISOString(),
      metadata: {
        source: "manual-draw",
      },
    };

    dispatch(addPolygon(newPolygon));
    dispatch(disablePolygonDrawing());

    // Remove temporary drawn layer from FeatureGroup
    // because Redux-driven layer will render the "real" polygon
    if (featureGroupRef.current) {
      featureGroupRef.current.clearLayers();
    }

    map.dragging.enable();
  };

  const handleDrawStop = () => {
    map.dragging.enable();
  };

  return (
    <FeatureGroup ref={featureGroupRef}>
      <EditControl
        ref={drawControlRef}
        position="topright"
        onCreated={handleCreated}
        onDrawStop={handleDrawStop}
        draw={{
          rectangle: false,
          circle: false,
          circlemarker: false,
          marker: false,
          polyline: false,
          polygon: isDrawingEnabled
            ? {
                allowIntersection: false,
                showArea: true,
                shapeOptions: {
                  color: "#1976d2",
                  weight: 2,
                },
              }
            : false,
        }}
        edit={{
          edit: false,
          remove: false,
        }}
      />
    </FeatureGroup>
  );
};

export default MapDrawHandler;
