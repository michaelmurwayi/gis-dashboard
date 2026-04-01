import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: {
    name: "Nyeri County",
    center: [-0.4201, 36.9476],
    zoom: 10,
    bounds: [
      [-0.75, 36.45], // south-west
      [-0.05, 37.25], // north-east
    ],
  },
  selectedRegion: null,
  selectedCoordinates: [],
  polygons: [],
  activePolygon: [],
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMapCenter(state, action) {
      state.region.center = action.payload;
    },
    setMapZoom(state, action) {
      state.region.zoom = action.payload;
    },
    setSelectedRegion(state, action) {
      state.selectedRegion = action.payload;
    },
    setSelectedCoordinates(state, action) {
      state.selectedCoordinates = action.payload;
    },
    setRegionBounds(state, action) {
      state.region.bounds = action.payload;
    },

    // Polygon workflow
    startNewPolygon(state) {
      state.activePolygon = [];
    },
    addPolygonPoint(state, action) {
      state.activePolygon.push(action.payload);
    },
    removeLastPolygonPoint(state) {
      state.activePolygon.pop();
    },
    clearActivePolygon(state) {
      state.activePolygon = [];
    },
    savePolygon(state, action) {
      const polygon = {
        id: Date.now(),
        name: action.payload?.name || `Polygon ${state.polygons.length + 1}`,
        coordinates: [...state.activePolygon],
        metadata: action.payload?.metadata || {},
      };

      state.polygons.push(polygon);
      state.activePolygon = [];
    },
    deletePolygon(state, action) {
      state.polygons = state.polygons.filter(
        (polygon) => polygon.id !== action.payload,
      );
    },
    setPolygons(state, action) {
      state.polygons = action.payload;
    },
  },
});

export const {
  setMapCenter,
  setMapZoom,
  setSelectedRegion,
  setSelectedCoordinates,
  setRegionBounds,
  startNewPolygon,
  addPolygonPoint,
  removeLastPolygonPoint,
  clearActivePolygon,
  savePolygon,
  deletePolygon,
  setPolygons,
} = mapSlice.actions;

export default mapSlice.reducer;
