import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const InfoCard = ({ header, icon: Icon, text, bgImage, overlayOpacity = 0.5, color = "0,0,0" }) => {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        width: "100%",
        p: 2,
        color: "#fff",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with controlled opacity */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: `rgba(${color}, ${overlayOpacity})`,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "100%",
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            bgcolor: "rgba(255,255,255,0.2)",
            borderRadius: 2,
            p: 1.2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Icon && <Icon fontSize="medium" style={{ color: "white" }} />}
        </Box>

        {/* Text */}
        <CardContent sx={{ p: 0 }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {header}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {text}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default InfoCard;