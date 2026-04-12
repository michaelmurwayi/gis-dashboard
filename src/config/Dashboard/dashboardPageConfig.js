const dashboardPageConfig = {
  content: {
    title: "GIS Dashboard",
    subtitle:
      "This dashboard provides a focused spatial workspace for Nyeri County. The current implementation supports map interaction, coordinate capture, and polygon preparation for region-based reporting.",
  },
  styles: {
    pageRoot: {
      minHeight: "100vh",
      height: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      overflowX: "hidden",
      overflowX: "hidden",
      position: "absolute",
      background:
        "linear-gradient(180deg, #0a0a0a 0%, #111111 40%, #161616 100%)",
      color: "#ffffff",
    },

    contentWrapper: {
      flex: 1,
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
      overflowY: "auto",
      overflowX: "hidden",
      boxSizing: "border-box",
    },

    pageTitle: {
      fontWeight: 700,
      mb: 1,
      color: "#ffffff",
    },

    pageSubtitle: {
      color: "rgba(255,255,255,0.72)",
      maxWidth: 900,
    },
  },
};

export default dashboardPageConfig;
