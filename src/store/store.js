import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./slices/mapSlice";
import polygonReducer from "./slices/polygonSlice";

export const store = configureStore({
  reducer: {
    map: mapReducer,
    polygon: polygonReducer,
  },
});

export default store;
