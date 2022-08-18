import DashboardProducts from "./DashboardProducts";
const DashboardHeader = () => {
  return (
    <tr className="dashboard-item-header">
      <th className="dashboard-column">description</th>
      <th className="dashboard-column">Product Type</th>
      <th className="dashboard-column">Price</th>
      <th className="dashboard-column">Quantity</th>
    </tr>
  );
};
const DashboardProductTable = () => {
  return (
    <table className="dashboard-item-list">
      <tbody>
        <DashboardHeader />
        <DashboardProducts />
      </tbody>
    </table>
  );
};

export default DashboardProductTable;
