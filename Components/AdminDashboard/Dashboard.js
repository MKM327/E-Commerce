import DashboardTable from "./DashboardTable";

const DashboardMenus = () => {
  return (
    <div className="dashboard-menus">
      <button className="menu-button">Product</button>
      <button className="menu-button">Users</button>
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
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <DashboardMenus />
        <div className="dashboard-task">
          <DashboardOperations />
          <div className="item-wrapper">
            <DashboardTable />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
