import { useContext } from "react";
import { DashboardContext } from "../../../Contexts/DashboardContext";
const DashboardProduct = ({ product }) => {
  const { clickedRow, setClickedRow } = useContext(DashboardContext);
  const { price, description, productType, quantity } = product;
  return (
    <tr
      className={
        clickedRow.id === product.id
          ? "dashboard-item clicked"
          : "dashboard-item"
      }
      onClick={() => {
        setClickedRow(product);
      }}
    >
      <td className="dashboard-column">{description}</td>
      <td className="dashboard-column">{productType}</td>
      <td className="dashboard-column">{price}</td>
      <td className="dashboard-column">{quantity}</td>
    </tr>
  );
};
export default DashboardProduct;
