import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./slices/mapSlice";
import polygonReducer from "./slices/polygonSlice";
import graphReducer from "./slices/graphSlice";

export const store = configureStore({
  reducer: {
    map: mapReducer,
    polygon: polygonReducer,
    graph: graphReducer,
  },
});

export default store;
