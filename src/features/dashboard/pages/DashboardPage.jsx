import { Box, Container, Paper, Typography } from "@mui/material";
import Navbar from "../../../components/navigation/Navbar";
import navbarConfig from "../../../config/Navbar/navbarConfig";
import dashboardPageConfig from "../../../config/Dashboard/dahboardPageConfig";

function DashboardPage() {
  const { content, styles } = dashboardPageConfig;

  return (
    <Box sx={styles.pageRoot}>
      <Navbar config={navbarConfig} />

      <Container maxWidth="xl" sx={styles.contentWrapper}></Container>
    </Box>
  );
}

export default DashboardPage;
