const dashboardPageConfig = {
  content: {
    title: "Dashboard",
    subtitle:
      "Welcome to the GIS dashboard. This page is currently set up as the base entry point for the application and will later host summary widgets, map previews, analytics panels, and spatial reporting components.",
  },
  styles: {
    pageRoot: {
      minHeight: "100vh",
      bgcolor: "grey.50",
    },
    contentWrapper: {
      py: { xs: 3, sm: 4, md: 5 },
    },
    heroCard: {
      p: { xs: 3, sm: 4, md: 5 },
      borderRadius: 3,
      boxShadow: 1,
    },
    pageTitle: {
      fontWeight: 700,
      mb: 1,
    },
    pageSubtitle: {
      color: "text.secondary",
      maxWidth: 720,
    },
  },
};

export default dashboardPageConfig;
