import { useRoutes } from "react-router-dom";
import { routesConfig } from "./app/config/routesConfig";
import DashboardPage from "./features/dashboard/pages/DashboardPage";

function App() {
  const element = useRoutes(routesConfig);
  return <DashboardPage />;
}

export default App;
