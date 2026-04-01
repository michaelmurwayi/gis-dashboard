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
      width: "100%",
      overflow: "hidden", // prevent outer overflow
      background:
        "linear-gradient(180deg, #0a0a0a 0%, #111111 40%, #161616 100%)",
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
    },
    contentWrapper: {
      flex: 1, // fill remaining space
      py: { xs: 2, sm: 3, md: 4 }, // reduce padding to avoid overflow
      px: { xs: 2, sm: 3, md: 4 },
      overflowY: "auto", // scroll inner content if needed
      overflowX: "hidden", // prevent horizontal scroll
    },
    heroCard: {
      p: { xs: 2, sm: 3, md: 4 },
      borderRadius: 3,
      backgroundColor: "#141414",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
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
