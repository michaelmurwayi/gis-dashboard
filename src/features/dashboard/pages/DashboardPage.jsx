import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import Navbar from "../../../components/navigation/Navbar";
import dashboardPageConfig from "../../../config/Dashboard/dashboardPageConfig";
import navbarConfig from "../../../config/Navbar/navbarConfig";
import MapPanel from "../../../components/map/MapPanel";
import PolygonControl from "../../../components/polygon/polygonControl";

function DashboardPage() {
  const { content, styles } = dashboardPageConfig;

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        left: "0px",
        position: "absolute",
        top: "0px",
        background:
          "linear-gradient(180deg, #0a0a0a 0%, #111111 40%, #161616 100%)",
        color: "#fff",
      }}
    >
      {/* Navbar */}
      <Navbar config={navbarConfig} />

      {/* Main content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
          px: { xs: 2, md: 4 },
          py: 3,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            flex: 1,
            height: "100%",
            width: "100%",
            m: 0,
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          {/* Left Sidebar */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              height: "100%",
              minWidth: 0,
            }}
          >
            <Paper
              sx={{
                flex: 1,
                width: "100%",
                minWidth: 0,
                borderRadius: 3,
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "white",
                p: 2.5,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <PolygonControl />
            </Paper>
          </Grid>

          {/* Map Panel */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              minWidth: 0,
            }}
          >
            <Paper
              sx={{
                flex: 1,
                borderRadius: 3,
                overflow: "hidden",
                display: "flex",
                width: "100%",
                minWidth: 0,
              }}
            >
              <MapPanel />
            </Paper>
          </Grid>

          {/* Right Sidebar */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              height: "100%",
              minWidth: 0,
            }}
          >
            <Paper
              sx={{
                flex: 1,
                width: "100%",
                minWidth: 0,
                borderRadius: 3,
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "white",
                p: 2.5,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              Polygon Controls / Info
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DashboardPage;
