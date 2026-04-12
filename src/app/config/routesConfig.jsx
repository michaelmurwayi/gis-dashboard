import DashboardPage from "../../features/dashboard/pages/DashboardPage";

export const routesConfig = [
  {
    path: "/",
    name: "Dashboard",
    element: <DashboardPage />, // ✅ correct
  },
];
