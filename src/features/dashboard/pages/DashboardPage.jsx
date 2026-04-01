import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import Navbar from "../../../components/navigation/Navbar";
import dashboardPageConfig from "../../../config/Dashboard/dahboardPageConfig";
import navbarConfig from "../../../config/Navbar/navbarConfig";
import MapPanel from "../../../components/map/MapPanel";

function DashboardPage() {
  const { content, styles } = dashboardPageConfig;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background:
          "linear-gradient(180deg, #0a0a0a 0%, #111111 40%, #161616 100%)",
        color: "#fff",
      }}
    >
      <Navbar config={navbarConfig} />

      {/* Main content */}
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          px: 3, // overall horizontal padding
          py: 3,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            height: "100%",
          }}
        >
          {/* Left Sidebar */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              height: "100%",
              display: "flex",
              pl: { xs: 0, md: 2 }, // extra left padding from page edge on desktop
            }}
          >
            <Paper
              sx={{
                flex: 1,
                width: "100%",
                borderRadius: 3,
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "white",
                p: 2.5,
                display: "flex",
                flexDirection: "column",
              }}
            >
              Left Panel / Controls
            </Paper>
          </Grid>

          {/* Map Panel */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              height: "90%",
              width: "75%",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                flex: 1,
                minHeight: 0,
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <MapPanel />
            </Box>
          </Grid>

          {/* Right Sidebar */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              height: "100%",
              display: "flex",
            }}
          >
            <Paper
              sx={{
                flex: 1,
                width: "100%",
                borderRadius: 3,
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "white",
                p: 2.5,
                display: "flex",
                flexDirection: "column",
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
