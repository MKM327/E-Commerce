import DashboardUsers from "./DashboardUsers";
const DashboardUserHeader = () => {
  return (
    <tr className="dashboard-item-header">
      <th className="dashboard-column">username</th>
      <th className="dashboard-column">password</th>
      <th className="dashboard-column">Role</th>
    </tr>
  );
};
const DashboardUserTable = () => {
  return (
    <table className="dashboard-item-list">
      <tbody>
        <DashboardUserHeader />
        <DashboardUsers />
      </tbody>
    </table>
  );
};
export default DashboardUserTable;
DashboardUsers;
