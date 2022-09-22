import { useContext } from "react";
import { CheckoutContext } from "../../Contexts/CheckoutContext";
import useFirebaseStorage from "../../Hooks/useFirebaseStorage";
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
  const { price } = item;
  const { imageUrl } = useFirebaseStorage(item.id);
  return (
    <li className="cart-item">
      <div className="image-wrapper">
        <img src={imageUrl} alt="asd" className="cart-image" />
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
