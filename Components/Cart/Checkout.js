import { useContext } from "react";
import { CheckoutContext } from "../../Contexts/CheckoutContext";
const Checkout = () => {
  const { calculateTotalCost } = useContext(CheckoutContext);
  return (
    <div className="total-wrapper">
      <div className="cart-total">
        <p className="cart-total-text">Total item Count</p>
        <strong className="cart-total-price">{`${calculateTotalCost()}$`}</strong>
      </div>
      <div className="button-wrapper">
        <button className="product-button">Checkout</button>
      </div>
    </div>
  );
};
export default Checkout;
