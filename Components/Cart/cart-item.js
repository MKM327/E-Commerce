import { useContext } from "react";
import { CheckoutContext } from "../../Contexts/CheckoutContext";
const ItemDescription = ({ Description, id }) => {
  const { renderCartItems } = useContext(CheckoutContext);

  return (
    <div className="description-wrapper">
      <p className="cart-description">{Description}</p>
      <div className="product-managment">
        <button
          className="product-button"
          onClick={() => {
            sessionStorage.removeItem(id);
            renderCartItems();
          }}
        >
          Remove from cart
        </button>
        <select
          name="select"
          id="select"
          className="cart-select"
          onChange={(e) => setQuantity(e.target.value)}
        >
          <option value="1" selected>
            1
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
};
const CartItem = ({ item, renderCartItems }) => {
  const { Description, Price, Image, id } = item;
  return (
    <li className="cart-item">
      <div className="image-wrapper">
        <img src={Image} alt="" className="cart-image" />
      </div>
      <ItemDescription Description={Description} id={id} />
      <div className="cart-checkout">
        <span className="cart-price">{`${Price}$`}</span>
      </div>
    </li>
  );
};
export default CartItem;
