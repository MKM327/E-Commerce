import { useContext } from "react";
import {
  DashboardContext,
  DashboardProvider,
} from "../../Contexts/DashboardContext";
import AdminNavbar from "../NavigationBar/AdminNavbar";
import DashboardProductTable from "./DashboardProductTable";
import DashboardUserTable from "./Users/DashboardUserTable";

const DashboardMenus = () => {
  const { setSelectedDashboard } = useContext(DashboardContext);
  return (
    <div className="dashboard-menus">
      <button
        className="menu-button"
        onClick={() => setSelectedDashboard("products")}
      >
        Product
      </button>
      <button
        className="menu-button"
        onClick={() => setSelectedDashboard("users")}
      >
        Users
      </button>
    </div>
  );
};
const DashboardOperations = () => {
  const { deleteItem } = useContext(DashboardContext);
  return (
    <ul className="dashboard-list">
      <li className="dashboard-menu">
        <div className="dashboard-operations">
          <button className="menu-button operation">Add</button>
          <button className="menu-button operation">Edit</button>
          <button
            className="menu-button operation"
            onClick={async () => {
              await deleteItem();
            }}
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  );
};
const DashboardNoProvider = () => {
  const { selectedDashboard } = useContext(DashboardContext);
  return (
    <>
      <AdminNavbar />
      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <form className="dashboard-edit closed">
            <div className="input-container">
              <input type="text" className="dashboard-input" id="name" />
              <label htmlFor="name" className="input-label">
                Name
              </label>
            </div>
            <div className="input-container">
              <input type="text" className="dashboard-input" id="type" />
              <label htmlFor="type" className="input-label">
                Type
              </label>
            </div>
            <div className="input-container">
              <input type="text" className="dashboard-input" id="price" />
              <label htmlFor="name" className="input-label">
                Name
              </label>
            </div>
            <div className="input-container">
              <input type="text" className="dashboard-input" id="quantity" />
              <label htmlFor="name" className="input-label">
                Quantity
              </label>
            </div>
            <button className="product-button">Add/Update</button>
          </form>
          <DashboardMenus />
          <div className="dashboard-task">
            <DashboardOperations />
            <div className="item-wrapper">
              {selectedDashboard === "products" ? (
                <DashboardProductTable />
              ) : (
                <DashboardUserTable />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Dashboard = () => {
  return (
    <DashboardProvider>
      <DashboardNoProvider />
    </DashboardProvider>
  );
};
export default Dashboard;
