import { createContext } from "react";
import useDashboard from "../Hooks/useDashboard";

const DashboardContext = createContext();
const DashboardProvider = ({ children }) => {
  const {
    selectedDashboard,
    setSelectedDashboard,
    setClickedRow,
    clickedRow,
    deleteItem,
  } = useDashboard();
  return (
    <DashboardContext.Provider
      value={{
        selectedDashboard,
        setSelectedDashboard,
        setClickedRow,
        clickedRow,
        deleteItem,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
export { DashboardContext, DashboardProvider };
