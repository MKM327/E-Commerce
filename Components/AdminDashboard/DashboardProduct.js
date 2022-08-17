const DashboardProduct = ({ product }) => {
  const { price, description, productType, quantity } = product;
  return (
    <tr className="dashboard-item">
      <td className="dashboard-column">{description}</td>
      <td className="dashboard-column">{productType}</td>
      <td className="dashboard-column">{price}</td>
      <td className="dashboard-column">{quantity}</td>
    </tr>
  );
};
export default DashboardProduct;
