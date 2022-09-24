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
    setMenuState,
    menuState,
  } = useDashboard();
  return (
    <DashboardContext.Provider
      value={{
        selectedDashboard,
        setSelectedDashboard,
        setClickedRow,
        clickedRow,
        deleteItem,
        setMenuState,
        menuState,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
export { DashboardContext, DashboardProvider };
