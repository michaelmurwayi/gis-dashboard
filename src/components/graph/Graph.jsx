// components/graph/GraphCard.jsx
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

const GraphCard = ({ graphKey, color = "#4caf50" }) => {
  const graph = useSelector((state) => state.graph[graphKey]);

  if (!graph) return null;

  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: "#1a1a1a",
        color: "#fff",
        height: 300,
      }}
    >
      <Typography variant="h6" mb={2}>
        {graph.title}
      </Typography>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={graph.data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />

          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default GraphCard;