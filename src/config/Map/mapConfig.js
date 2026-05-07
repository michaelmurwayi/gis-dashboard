const mapConfig = {
  mapbox: {
    style: "mapbox://styles/mapbox/dark-v11",
    accessToken: "",
  },
  region: {
    minZoom: 7,
    maxZoom: 15,
  },
  styles: {
    mapWrapper: {
      width: "100%",
      height: "100%",
      borderRadius: 3,
      overflow: "hidden",
    },
  },
};

export default mapConfig;