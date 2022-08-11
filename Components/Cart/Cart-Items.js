import useCart from "../../Hooks/useCart";
import CartItem from "./cart-item";
import Checkout from "./Checkout";
const CartItems = () => {
  const { cartItems } = useCart();
  return (
    <>
      <ul className="cart-items">
        {cartItems.map((item) => {
          console.log(item);
          return <CartItem key={item.id} item={item} />;
        })}
      </ul>
      <Checkout />
    </>
  );
};
export default CartItems;
