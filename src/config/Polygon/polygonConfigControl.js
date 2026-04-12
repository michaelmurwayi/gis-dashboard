const polygonControlConfig = {
  title: "Polygon Tools",
  subtitle: "Create and manage polygon boundaries",

  // ---------------- ACTION CONFIG ----------------
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
      variant: "outlined",
      color: "secondary",
    },
  },

  // ---------------- DISPLAY ----------------
  display: {
    showCount: true,
    showStatus: true,
    showManualInput: true,
    showSelectedPoint: true,
  },

  // ---------------- CARD STYLING ----------------
  card: {
    elevation: 0,
    borderRadius: 3,
    padding: 2.5,
    background: "rgba(0, 0, 0, 0.75)",
    border: "1px solid rgba(221, 186, 135, 0.25)",
  },

  // ---------------- TYPOGRAPHY ----------------
  typography: {
    titleColor: "#ffffff",
    subtitleColor: "rgba(255,255,255,0.7)",
    accentColor: "#DDBA87",
  },

  // ---------------- CHIP STYLING ----------------
  chip: {
    active: {
      background: "#DDBA87",
      color: "#000",
    },
    default: {
      background: "rgba(255,255,255,0.08)",
      color: "#fff",
    },
  },

  // ---------------- INPUT STYLING ----------------
  input: {
    variant: "outlined",
    size: "small",
    fullWidth: true,
    sx: {
      input: { color: "#fff" },
      label: { color: "rgba(255,255,255,0.6)" },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgba(221, 186, 135, 0.3)",
        },
        "&:hover fieldset": {
          borderColor: "#DDBA87",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#DDBA87",
        },
      },
    },
  },

  // ---------------- BUTTON SYSTEM ----------------
  button: {
    primary: {
      variant: "contained",
      sx: {
        background: "#DDBA87",
        color: "#000",
        fontWeight: 600,
        "&:hover": {
          background: "#caa874",
        },
      },
    },

    outlined: {
      variant: "outlined",
      sx: {
        borderColor: "#DDBA87",
        color: "#DDBA87",
        fontWeight: 500,
        "&:hover": {
          borderColor: "#fff",
          color: "#fff",
        },
      },
    },

    danger: {
      variant: "outlined",
      sx: {
        borderColor: "#ff6b6b",
        color: "#ff6b6b",
        "&:hover": {
          borderColor: "#ff4d4d",
          color: "#fff",
        },
      },
    },
  },
};

export default polygonControlConfig;
