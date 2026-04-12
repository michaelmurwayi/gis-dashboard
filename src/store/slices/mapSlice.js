import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: {
    name: "Nyeri County",
    center: [-0.4201, 36.9476], // [lat, lng]
    zoom: 10,
    bounds: [
      [-0.75, 36.45],
      [-0.05, 37.25],
    ],
  },

  selectedCoordinates: [],

  // Polygon drawing state
  isDrawingPolygon: false,
  polygonsVisible: true,

  // Saved polygons
  polygons: [],

  // Current polygon being drawn
  activePolygon: [],
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setSelectedCoordinates: (state, action) => {
      state.selectedCoordinates = action.payload;
    },

    startPolygonDrawing: (state) => {
      state.isDrawingPolygon = true;
      state.activePolygon = [];
    },

    addPolygonPoint: (state, action) => {
      if (!state.isDrawingPolygon) return;
      state.activePolygon.push(action.payload);
    },

    removeLastPolygonPoint: (state) => {
      if (state.activePolygon.length > 0) {
        state.activePolygon.pop();
      }
    },

    clearActivePolygon: (state) => {
      state.activePolygon = [];
    },

    finishPolygonDrawing: (state) => {
      if (state.activePolygon.length < 3) return;

      const newPolygon = {
        id: `poly-${Date.now()}`,
        name: `AOI ${state.polygons.length + 1}`,
        coordinates: [...state.activePolygon], // [lat, lng]
        createdAt: new Date().toISOString(),
      };

      state.polygons.push(newPolygon);
      state.activePolygon = [];
      state.isDrawingPolygon = false;
    },

    clearPolygons: (state) => {
      state.polygons = [];
      state.activePolygon = [];
      state.isDrawingPolygon = false;
    },

    togglePolygonsVisibility: (state) => {
      state.polygonsVisible = !state.polygonsVisible;
    },

    cancelPolygonDrawing: (state) => {
      state.activePolygon = [];
      state.isDrawingPolygon = false;
    },
  },
});

export const {
  setSelectedCoordinates,
  startPolygonDrawing,
  addPolygonPoint,
  removeLastPolygonPoint,
  clearActivePolygon,
  finishPolygonDrawing,
  clearPolygons,
  togglePolygonsVisibility,
  cancelPolygonDrawing,
} = mapSlice.actions;

export default mapSlice.reducer;
