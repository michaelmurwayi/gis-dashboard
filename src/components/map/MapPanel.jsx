import { Box } from "@mui/material";
import NyeriMap from "./NyeriMap";

export default function MapPanel() {
  return (
    <Box
      sx={{
        width: "80vw",
        height: "90vh",
        display: "block",
        backgroundColor: "green",
        flexDirection: "column",
      }}
    >
      <NyeriMap style={{ width: "100%", height: "100%" }} />
    </Box>
  );
}
