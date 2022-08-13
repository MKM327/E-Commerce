import { useContext } from "react";
import { CheckoutContext } from "../../Contexts/CheckoutContext";
const ItemDescription = ({ item }) => {
  const { renderCartItems } = useContext(CheckoutContext);
  const { description, id } = item;
  return (
    <div className="description-wrapper">
      <p className="cart-description">{description}</p>
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
              JSON.stringify({ ...item, SelectedQuantity: e.target.value })
            );
            renderCartItems();
          }}
        >
          //create an option based on the quantity count
          {Array(item.quantity)
            //max is 9
            .fill(0)
            .map((_, index) =>
              index < 9 ? (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ) : null
            )}
        </select>
      </div>
    </div>
  );
};
const CartItem = ({ item }) => {
  const {price, id } = item;
  return (
    <li className="cart-item">
      <div className="image-wrapper">
        <img src={`/images/${id}.jpg`} alt="" className="cart-image" />
      </div>
      <ItemDescription item={item} />
      <div className="cart-checkout">
        <span className="cart-price">{`${
          item.SelectedQuantity ? price * item.SelectedQuantity : price
        }$`}</span>
      </div>
    </li>
  );
};
export default CartItem;
