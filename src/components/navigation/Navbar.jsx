import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Stack,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar({ config }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const {
    branding = {},
    navItems = [],
    drawerWidth = 280,
    styles = {},
  } = config || {};

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };

  const renderDesktopNav = () => {
    if (!navItems.length) {
      return (
        <Typography variant="body2" color="inherit" sx={styles.emptyStateText}>
          No navigation items yet
        </Typography>
      );
    }

    return (
      <Stack {...styles.desktopNavStack}>
        {navItems.map((item) => (
          <Button
            key={item.key || item.path}
            component={NavLink}
            to={item.path}
            color="inherit"
            sx={styles.desktopNavButton}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    );
  };

  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
        ...styles.drawerContent,
      }}
      role="presentation"
    >
      <Box sx={styles.drawerHeader}>
        <Box sx={styles.drawerBrandIconBox}>{branding.iconLabel || "GIS"}</Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={700}>
            {branding.title || "GIS Dashboard"}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {branding.subtitle || "Spatial Intelligence Platform"}
          </Typography>
        </Box>
      </Box>

      <Divider />

      <List sx={styles.drawerList}>
        {navItems.length > 0 ? (
          navItems.map((item) => (
            <ListItemButton
              key={item.key || item.path}
              component={NavLink}
              to={item.path}
              onClick={handleCloseDrawer}
              sx={styles.drawerListItemButton}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          ))
        ) : (
          <ListItemText
            primary="No navigation items yet"
            primaryTypographyProps={{
              variant: "body2",
              color: "text.secondary",
              sx: { px: 1.5, py: 1 },
            }}
          />
        )}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={styles.outerWrapper}>
        <Paper elevation={0} sx={styles.navShell}>
          <Toolbar sx={styles.toolbar}>
            <Box sx={styles.brandContainer}>
              <Box sx={styles.brandIconBox}>{branding.iconLabel || "GIS"}</Box>

              <Box sx={styles.brandTextBox}>
                <Typography
                  variant="h6"
                  component="div"
                  noWrap
                  sx={styles.titleText}
                >
                  {branding.title || "GIS Dashboard"}
                </Typography>

                <Typography variant="caption" noWrap sx={styles.subtitleText}>
                  {branding.subtitle || "Spatial Intelligence Platform"}
                </Typography>
              </Box>
            </Box>

            <Box sx={styles.desktopNavContainer}>{renderDesktopNav()}</Box>

            <IconButton
              color="inherit"
              edge="end"
              aria-label="open navigation menu"
              onClick={handleDrawerToggle}
              sx={styles.mobileMenuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Paper>
      </Box>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleCloseDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          ...styles.drawer,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            ...(styles.drawer?.["& .MuiDrawer-paper"] || {}),
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Navbar;
