// src/App.jsx
import { useRoutes } from "react-router-dom";
import { routesConfig } from "./app/config/routesConfig";

function App() {
  return useRoutes(routesConfig);
}

export default App; // <-- must be default export
