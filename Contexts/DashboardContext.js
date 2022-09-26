import { createContext } from "react";
import useAdminManage from "../Hooks/useAdminManage";
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
  const {
    setName,
    name,
    setType,
    type,
    setPrice,
    price,
    setQuantity,
    quantity,
    manageForm,
    setPhoto,
    photo,
    loading,
  } = useAdminManage();
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
        setName,
        name,
        setType,
        type,
        setPrice,
        price,
        setQuantity,
        quantity,
        manageForm,
        setPhoto,
        photo,
        loading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
export { DashboardContext, DashboardProvider };
