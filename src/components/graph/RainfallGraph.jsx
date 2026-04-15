// components/graph/RainfallGraph.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Paper, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const RainfallGraph = () => {
  const { rainfallGraph } = useSelector((state) => state.graph);

  return (
    <Paper
      sx={{
        mt: 5,
        p: 2,
        borderRadius: 3,
        backgroundColor: "#1a1a1a",
        color: "#fff",
        height: 300,
      }}
    >
      <Typography variant="h6" mb={2}>
        {rainfallGraph.title}
      </Typography>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={rainfallGraph.data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          
          <XAxis
            dataKey="month"
            stroke="#aaa"
            label={{
              value: rainfallGraph.xAxisLabel,
              position: "insideBottom",
              offset: -5,
              fill: "#aaa",
            }}
          />
          <YAxis
            stroke="#aaa"
            label={{
              value: rainfallGraph.yAxisLabel,
              angle: -90,
              position: "insideLeft",
              fill: "#aaa",
            }}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="rainfall"
            stroke="#4caf50"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default RainfallGraph;