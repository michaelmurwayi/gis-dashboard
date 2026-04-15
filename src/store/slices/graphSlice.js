// store/slices/graphSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rainfallGraph: {
    title: "Rainfall (Last 12 Months)",
    xAxisLabel: "Month",
    yAxisLabel: "Rainfall (mm)",
    data: [
      { month: "May", rainfall: 120 },
      { month: "Jun", rainfall: 90 },
      { month: "Jul", rainfall: 60 },
      { month: "Aug", rainfall: 40 },
      { month: "Sep", rainfall: 55 },
      { month: "Oct", rainfall: 130 },
      { month: "Nov", rainfall: 160 },
      { month: "Dec", rainfall: 110 },
      { month: "Jan", rainfall: 70 },
      { month: "Feb", rainfall: 50 },
      { month: "Mar", rainfall: 140 },
      { month: "Apr", rainfall: 180 },
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
  },
});

export const { setRainfallData } = graphSlice.actions;
export default graphSlice.reducer;