// store/slices/graphSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rainfallGraph: {
    title: "Rainfall (Last 12 Months)",
    xAxisLabel: "Month",
    yAxisLabel: "Rainfall (mm)",
    data: [
      { month: "May", value: 120 },
      { month: "Jun", value: 90 },
      { month: "Jul", value: 60 },
      { month: "Aug", value: 40 },
      { month: "Sep", value: 55 },
      { month: "Oct", value: 130 },
      { month: "Nov", value: 160 },
      { month: "Dec", value: 110 },
      { month: "Jan", value: 70 },
      { month: "Feb", value: 50 },
      { month: "Mar", value: 140 },
      { month: "Apr", value: 180 },
    ],
  },

  temperatureGraph: {
    title: "Temperature (Last 12 Months)",
    xAxisLabel: "Month",
    yAxisLabel: "Temperature (°C)",
    data: [
      { month: "May", value: 22 },
      { month: "Jun", value: 21 },
      { month: "Jul", value: 20 },
      { month: "Aug", value: 21 },
      { month: "Sep", value: 23 },
      { month: "Oct", value: 24 },
      { month: "Nov", value: 25 },
      { month: "Dec", value: 24 },
      { month: "Jan", value: 26 },
      { month: "Feb", value: 27 },
      { month: "Mar", value: 26 },
      { month: "Apr", value: 25 },
    ],
  },
};

const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    setRainfallData: (state, action) => {
      state.rainfallGraph.data = action.payload;
    },
    setTemperatureData: (state, action) => {
      state.temperatureGraph.data = action.payload;
    },
  },
});

export const { setRainfallData, setTemperatureData } = graphSlice.actions;
export default graphSlice.reducer;