import useDashboard from "../../Hooks/useDashboard";
import AdminNavbar from "../NavigationBar/AdminNavbar";
import DashboardProductTable from "./DashboardProductTable";
import DashboardUserTable from "./Users/DashboardUserTable";
const DashboardMenus = ({ setSelectedDashboard }) => {
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
  return (
    <ul className="dashboard-list">
      <li className="dashboard-menu">
        <div className="dashboard-operations">
          <button className="menu-button operation">Add</button>
          <button className="menu-button operation">Edit</button>
          <button className="menu-button operation">Delete</button>
        </div>
      </li>
    </ul>
  );
};
const Dashboard = () => {
  const { selectedDashboard, setSelectedDashboard } = useDashboard();
  return (
    <>
      <AdminNavbar />
      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <DashboardMenus setSelectedDashboard={setSelectedDashboard} />
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
export default Dashboard;
