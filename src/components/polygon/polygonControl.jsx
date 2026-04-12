import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Chip,
  Divider,
} from "@mui/material";

import polygonControlConfig from "../../config/Polygon/polygonConfigControl";

import {
  startPolygonDrawing,
  clearPolygons,
  togglePolygonsVisibility,
  cancelPolygonDrawing,
} from "../../store/slices/mapSlice";

const PolygonControl = () => {
  const dispatch = useDispatch();

  const { polygons, isDrawingPolygon, polygonsVisible } = useSelector(
    (state) => state.map,
  );

  const polygonCount = polygons.length;

  const { title, subtitle, actions, display, card } = polygonControlConfig;

  return (
    <Card
      elevation={card.elevation}
      sx={{ borderRadius: card.borderRadius, height: "100%" }}
    >
      <CardContent sx={{ p: card.padding }}>
        <Stack spacing={2}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>

          <Divider />

          {display.showStatus && (
            <Stack direction="row" spacing={1}>
              <Chip
                label={isDrawingPolygon ? "Drawing: ON" : "Drawing: OFF"}
                color={isDrawingPolygon ? "success" : "default"}
                size="small"
              />
              <Chip
                label={polygonsVisible ? "Visible" : "Hidden"}
                color={polygonsVisible ? "info" : "default"}
                size="small"
              />
            </Stack>
          )}

          {display.showCount && (
            <Typography>
              Polygon Count: <b>{polygonCount}</b>
            </Typography>
          )}

          <Stack spacing={1.5}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => dispatch(startPolygonDrawing())}
            >
              Start Drawing
            </Button>

            <Button
              fullWidth
              color="warning"
              onClick={() => dispatch(cancelPolygonDrawing())}
            >
              Cancel Drawing
            </Button>

            <Button
              fullWidth
              color="error"
              onClick={() => dispatch(clearPolygons())}
              disabled={polygonCount === 0}
            >
              Clear All
            </Button>

            <Button
              fullWidth
              onClick={() => dispatch(togglePolygonsVisibility())}
              disabled={polygonCount === 0}
            >
              Toggle Visibility
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PolygonControl;
