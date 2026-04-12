export const selectPolygonState = (state) => state.polygon;

export const selectPolygons = (state) => state.polygon.polygons;

export const selectPolygonCount = (state) => state.polygon.polygons.length;

export const selectIsPolygonDrawingEnabled = (state) =>
  state.polygon.isDrawingEnabled;

export const selectArePolygonsVisible = (state) => state.polygon.isVisible;

export const selectActivePolygon = (state) => state.polygon.activePolygon;
