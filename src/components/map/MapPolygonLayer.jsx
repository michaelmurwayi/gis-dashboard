import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Polygon, Popup } from "react-leaflet";
import {
  selectPolygons,
  selectArePolygonsVisible,
  selectActivePolygon,
} from "../selectors/polygonSelectors";
import { setActivePolygon } from "../slices/polygonSlice";

const MapPolygonLayer = () => {
  const dispatch = useDispatch();

  const polygons = useSelector(selectPolygons);
  const arePolygonsVisible = useSelector(selectArePolygonsVisible);
  const activePolygon = useSelector(selectActivePolygon);

  if (!arePolygonsVisible || polygons.length === 0) {
    return null;
  }

  return (
    <>
      {polygons.map((polygon) => {
        const isActive = activePolygon?.id === polygon.id;

        return (
          <Polygon
            key={polygon.id}
            positions={polygon.coordinates}
            pathOptions={{
              color: isActive ? "#d32f2f" : "#1976d2",
              weight: isActive ? 4 : 2,
              fillOpacity: 0.25,
            }}
            eventHandlers={{
              click: () => {
                dispatch(setActivePolygon(polygon));
              },
            }}
          >
            <Popup>
              <div>
                <strong>{polygon.name}</strong>
                <br />
                Area: {polygon.area ? `${polygon.area} ha` : "N/A"}
              </div>
            </Popup>
          </Polygon>
        );
      })}
    </>
  );
};

export default MapPolygonLayer;
