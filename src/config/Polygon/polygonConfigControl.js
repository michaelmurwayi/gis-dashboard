const polygonControlConfig = {
  title: "Polygon Tools",
  subtitle: "Create and manage polygon boundaries",
  actions: {
    enableDraw: {
      key: "enableDraw",
      label: "Draw Polygon",
      variant: "contained",
      color: "primary",
    },
    clearAll: {
      key: "clearAll",
      label: "Clear Polygons",
      variant: "outlined",
      color: "error",
    },
    toggleVisibility: {
      key: "toggleVisibility",
      labelVisible: "Hide Polygons",
      labelHidden: "Show Polygons",
      variant: "text",
      color: "secondary",
    },
  },
  display: {
    showCount: true,
    showStatus: true,
  },
  card: {
    elevation: 3,
    borderRadius: 3,
    padding: 2,
  },
};

export default polygonControlConfig;
