import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Chip,
  Divider,
  TextField,
  Paper,
} from "@mui/material";

import polygonControlConfig from "../../config/Polygon/polygonConfigControl";

import {
  startPolygonDrawing,
  clearPolygons,
  togglePolygonsVisibility,
  cancelPolygonDrawing,
  addPolygonPoint,
  finishPolygonDrawing,
} from "../../store/slices/mapSlice";

const PolygonControl = () => {
  const dispatch = useDispatch();

  const { polygons, isDrawingPolygon, polygonsVisible, selectedCoordinates } =
    useSelector((state) => state.map);

  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const polygonCount = polygons?.length || 0;

  const cfg = polygonControlConfig;

  // ---------------- FORMAT ----------------
  const formatCoord = (val) => {
    if (!Array.isArray(val) || val.length < 2) return "--";
    const lat = Number(val[0]);
    const lng = Number(val[1]);
    if (isNaN(lat) || isNaN(lng)) return "--";
    return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  };

  // ---------------- ADD POINT ----------------
  const handleAdd = () => {
    if (!lat || !lng) return;
    dispatch(addPolygonPoint([parseFloat(lat), parseFloat(lng)]));
    setLat("");
    setLng("");
  };

  return (
    <Card
      elevation={cfg.card.elevation}
      sx={{
        borderRadius: cfg.card.borderRadius,
        p: cfg.card.padding,
        background: cfg.card.background,
        border: cfg.card.border,
        color: "#fff",
        height: "100%",
      }}
    >
      <CardContent>
        <Stack spacing={2.5}>
          {/* HEADER */}
          <div>
            <Typography
              variant="h6"
              sx={{ color: cfg.typography.titleColor, fontWeight: 700 }}
            >
              {cfg.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: cfg.typography.subtitleColor }}
            >
              {cfg.subtitle}
            </Typography>
          </div>

          <Divider sx={{ borderColor: "rgba(221,186,135,0.2)" }} />

          {/* STATUS */}
          {cfg.display.showStatus && (
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip
                label={isDrawingPolygon ? "Drawing Active" : "Idle"}
                sx={{
                  background: isDrawingPolygon
                    ? cfg.chip.active.background
                    : cfg.chip.default.background,
                  color: isDrawingPolygon
                    ? cfg.chip.active.color
                    : cfg.chip.default.color,
                }}
                size="small"
              />

              <Chip
                label={polygonsVisible ? "Visible" : "Hidden"}
                sx={cfg.chip.default}
                size="small"
              />

              <Chip
                label={`Polygons: ${polygonCount}`}
                sx={cfg.chip.default}
                size="small"
              />
            </Stack>
          )}

          {/* SELECTED POINT */}
          {cfg.display.showSelectedPoint && (
            <Paper
              sx={{
                p: 1.5,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(221,186,135,0.2)",
                color: "#fff",
              }}
            >
              <Typography variant="caption" sx={{ color: "#DDBA87" }}>
                Selected Coordinate
              </Typography>

              <Typography variant="body2">
                {formatCoord(selectedCoordinates)}
              </Typography>
            </Paper>
          )}

          {/* INPUT */}
          {cfg.display.showManualInput && (
            <>
              <Typography sx={{ color: "#DDBA87", fontWeight: 600 }}>
                Manual Input
              </Typography>

              <Stack direction="row" spacing={1}>
                <TextField
                  label="Lat"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                  {...cfg.input}
                />
                <TextField
                  label="Lng"
                  value={lng}
                  onChange={(e) => setLng(e.target.value)}
                  {...cfg.input}
                />
              </Stack>

              <Button fullWidth onClick={handleAdd} sx={cfg.button.outlined.sx}>
                Add Point
              </Button>
            </>
          )}

          <Divider sx={{ borderColor: "rgba(221,186,135,0.2)" }} />

          {/* ACTIONS */}
          <Stack spacing={1.2}>
            <Button
              fullWidth
              onClick={() => dispatch(startPolygonDrawing())}
              sx={cfg.button.primary.sx}
            >
              {cfg.actions.enableDraw.label}
            </Button>

            <Button
              fullWidth
              onClick={() => dispatch(cancelPolygonDrawing())}
              sx={cfg.button.outlined.sx}
            >
              Cancel Drawing
            </Button>

            <Button
              fullWidth
              onClick={() => dispatch(clearPolygons())}
              sx={cfg.button.danger.sx}
              disabled={polygonCount === 0}
            >
              {cfg.actions.clearAll.label}
            </Button>

            <Button
              fullWidth
              onClick={() => dispatch(togglePolygonsVisibility())}
              sx={cfg.button.outlined.sx}
            >
              {polygonsVisible
                ? cfg.actions.toggleVisibility.labelVisible
                : cfg.actions.toggleVisibility.labelHidden}
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PolygonControl;
