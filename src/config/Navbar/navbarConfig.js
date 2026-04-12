const navbarConfig = {
  branding: {
    title: "Elvis Matu",
    subtitle: "Spatial Intelligence Platform",
    iconLabel: "GIS",
  },

  drawerWidth: 280,

  navItems: [
    { key: "dashboard", label: "Dashboard", path: "/" },
    { key: "maps", label: "Maps", path: "/maps" },
    { key: "layers", label: "Layers", path: "/layers" },
    { key: "reports", label: "Reports", path: "/reports" },
  ],

  styles: {
    outerWrapper: {
      width: "100%",
      maxWidth: "100%",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      pt: { xs: 2, sm: 2.5, md: 3 },
      px: { xs: 2, sm: 3 },
      position: "sticky",
      top: 0,
      zIndex: 1200,
      backgroundColor: "transparent",
      overflowX: "hidden",
      flexShrink: 0,
    },

    navShell: {
      width: {
        xs: "100%",
        sm: "90%",
        md: "85%",
        lg: "85%",
      },
      maxWidth: "100%",
      boxSizing: "border-box",
      bgcolor: "black",
      color: "rgba(253,212,153)",
      boxShadow: 4,
      border: "1px solid",
      borderColor: "rgba(255,255,255,0.08)",
      overflow: "hidden",
      flexShrink: 0,
      clipPath:
        "polygon(18px 0%, calc(100% - 18px) 0%, 100% 18px, 100% calc(100% - 18px), calc(100% - 18px) 100%, 18px 100%, 0% calc(100% - 18px), 0% 18px)",
    },

    toolbar: {
      width: "100%",
      boxSizing: "border-box",
      minHeight: { xs: 64, md: 72 },
      px: { xs: 2, sm: 3, md: 4 },
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 2,
      overflow: "hidden",
    },

    brandContainer: {
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      minWidth: 0,
      flex: 1,
      overflow: "hidden",
    },

    brandIconBox: {
      width: { xs: 40, md: 44 },
      height: { xs: 40, md: 44 },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "rgba(0,0,0,1)",
      fontWeight: 700,
      flexShrink: 0,
      clipPath:
        "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
    },

    brandTextBox: {
      minWidth: 0,
      color: "white",
      overflow: "hidden",
    },

    titleText: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    subtitleText: {
      display: { xs: "none", sm: "block" },
      opacity: 0.85,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    desktopNavContainer: {
      display: { xs: "none", md: "flex" },
      alignItems: "center",
      flexShrink: 0,
      minWidth: "fit-content",
    },

    desktopNavStack: {
      direction: "row",
      spacing: 1,
      alignItems: "center",
      flexWrap: "nowrap",
    },

    desktopNavButton: {
      px: 2,
      py: 1,
      textTransform: "none",
      fontWeight: 500,
      fontSize: "0.95rem",
      whiteSpace: "nowrap",
      minWidth: "fit-content",
      clipPath:
        "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)",
      "&.active": {
        bgcolor: "rgba(255,255,255,0.18)",
      },
      "&:hover": {
        bgcolor: "rgba(255,255,255,0.12)",
      },
    },

    mobileMenuButton: {
      display: { xs: "inline-flex", md: "none" },
      flexShrink: 0,
    },

    drawer: {
      display: { xs: "block", md: "none" },
      "& .MuiDrawer-paper": {
        width: 280,
        maxWidth: "100%",
        boxSizing: "border-box",
      },
    },

    drawerContent: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },

    drawerHeader: {
      px: 2.5,
      py: 2,
      display: "flex",
      alignItems: "center",
      gap: 1.5,
    },

    drawerBrandIconBox: {
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "primary.main",
      color: "primary.contrastText",
      fontWeight: 700,
      flexShrink: 0,
      clipPath:
        "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)",
    },

    drawerList: {
      px: 1.5,
      py: 1.5,
    },

    drawerListItemButton: {
      mb: 0.5,
      clipPath:
        "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)",
      "&.active": {
        bgcolor: "action.selected",
      },
    },

    emptyStateText: {
      opacity: 0.8,
    },
  },
};

export default navbarConfig;
