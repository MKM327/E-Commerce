const DashboardHeader = () => {
  return (
    <tr className="dashboard-item-header">
      <th className="dashboard-column">Product Name</th>
      <th className="dashboard-column">Product Type</th>
      <th className="dashboard-column">Price</th>
      <th className="dashboard-column">Quantity</th>
    </tr>
  );
};
const DashboardTable = () => {
  return (
    <table className="dashboard-item-list">
      <DashboardHeader />
      <tr className="dashboard-item">
        <td className="dashboard-column">Name</td>
        <td className="dashboard-column">type</td>
        <td className="dashboard-column">Price</td>
        <td className="dashboard-column">Quantity</td>
      </tr>
    </table>
  );
};
export default DashboardTable;
