import { useState } from "react";

const useDashboard = () => {
  const Dashboards = ["products", "users"];
  const [selectedDashboard, setSelectedDashboard] = useState("products");
  function setDashboard(dashboard) {
    var lowerCaseDashboard = dashboard.toLowerCase();
    if (Dashboards.includes(lowerCaseDashboard)) {
      setSelectedDashboard(lowerCaseDashboard);
    }
  }
  return { selectedDashboard, setSelectedDashboard: setDashboard };
};
export default useDashboard;
