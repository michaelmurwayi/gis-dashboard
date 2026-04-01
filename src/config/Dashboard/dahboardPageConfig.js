const dashboardPageConfig = {
  content: {
    title: "GIS Dashboard",
    subtitle:
      "Welcome to the GIS dashboard. This page is currently set up as the base entry point for the application and will later host summary widgets, map previews, analytics panels, and spatial reporting components.",
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
    },

    contentWrapper: {
      py: { xs: 4, sm: 5, md: 6 },
    },

    heroCard: {
      p: { xs: 3, sm: 4, md: 5 },
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
      maxWidth: 720,
    },
  },
};

export default dashboardPageConfig;
