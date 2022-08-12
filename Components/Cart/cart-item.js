import { useContext } from "react";
import { CheckoutContext } from "../../Contexts/CheckoutContext";
const ItemDescription = ({ item }) => {
  const { renderCartItems } = useContext(CheckoutContext);
  const { Description, Price, Image, id } = item;
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
          onChange={(e) => {
            sessionStorage.setItem(
              id,
              JSON.stringify({ ...item, Quantity: e.target.value })
            );
            renderCartItems();
          }}
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
const CartItem = ({ item }) => {
  const { Description, Price, Image, id } = item;
  return (
    <li className="cart-item">
      <div className="image-wrapper">
        <img src={Image} alt="" className="cart-image" />
      </div>
      <ItemDescription item={item} />
      <div className="cart-checkout">
        <span className="cart-price">{`${
          item.Quantity ? Price * item.Quantity : Price
        }$`}</span>
      </div>
    </li>
  );
};
export default CartItem;
