import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDrawingEnabled: false,
  isVisible: true,
  polygons: [],
  activePolygon: null,
};

const polygonSlice = createSlice({
  name: "polygon",
  initialState,
  reducers: {
    enablePolygonDrawing: (state) => {
      state.isDrawingEnabled = true;
    },

    disablePolygonDrawing: (state) => {
      state.isDrawingEnabled = false;
    },

    togglePolygonVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },

    setActivePolygon: (state, action) => {
      state.activePolygon = action.payload;
    },

    addPolygon: (state, action) => {
      state.polygons.push(action.payload);
      state.activePolygon = action.payload;
      state.isDrawingEnabled = false;
    },

    removePolygon: (state, action) => {
      const polygonId = action.payload;

      state.polygons = state.polygons.filter(
        (polygon) => polygon.id !== polygonId,
      );

      if (state.activePolygon?.id === polygonId) {
        state.activePolygon = null;
      }
    },

    clearPolygons: (state) => {
      state.polygons = [];
      state.activePolygon = null;
      state.isDrawingEnabled = false;
    },
  },
});

export const {
  enablePolygonDrawing,
  disablePolygonDrawing,
  togglePolygonVisibility,
  setActivePolygon,
  addPolygon,
  removePolygon,
  clearPolygons,
} = polygonSlice.actions;

export default polygonSlice.reducer;
