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
const DashboardProductTable = ({ setClickedRow, clickedRow }) => {
  return (
    <table className="dashboard-item-list">
      <tbody>
        <DashboardHeader />
        <DashboardProducts
          setClickedRow={setClickedRow}
          clickedRow={clickedRow}
        />
      </tbody>
    </table>
  );
};

export default DashboardProductTable;
