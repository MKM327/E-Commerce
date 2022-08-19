import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "../Contexts/ProductsContext";
import { LoginContext } from "../Contexts/LoginContext";
const API_Root = "https://localhost:7160/api/";
const useDashboard = () => {
  const Dashboards = ["products", "users"];
  const [selectedDashboard, setSelectedDashboard] = useState("products");
  const [clickedRow, setClickedRow] = useState({});
  const { getProducts } = useContext(ProductContext);
  const { getAllUsers } = useContext(LoginContext);
  useEffect(() => {});
  function setDashboard(dashboard) {
    var lowerCaseDashboard = dashboard.toLowerCase();
    if (Dashboards.includes(lowerCaseDashboard)) {
      setSelectedDashboard(lowerCaseDashboard);
    }
  }

  async function deleteItem() {
    if (Object.keys(clickedRow).length === 0) {
      return;
    }
    if (selectedDashboard === "products") {
      await axios.delete(API_Root + "ECommerce/Delete", {
        data: clickedRow,
      });
      await getProducts();
    } else if (selectedDashboard === "users") {
      await axios.delete(API_Root + `Login/Delete`, { data: clickedRow });
      await getAllUsers();
    }
    setClickedRow({});
  }
  return {
    selectedDashboard,
    setSelectedDashboard: setDashboard,
    setClickedRow,
    clickedRow,
    deleteItem,
  };
};
export default useDashboard;
