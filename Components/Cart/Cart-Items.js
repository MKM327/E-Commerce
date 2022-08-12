import { useContext } from "react";
import {
  CheckoutContext,
  CheckoutProvider,
} from "../../Contexts/CheckoutContext";
import CartItem from "./cart-item";
import Checkout from "./Checkout";
const CartItems = () => {
  return (
    <CheckoutProvider>
      <CartItemsNoProvider />
    </CheckoutProvider>
  );
};
const CartItemsNoProvider = () => {
  const { cartItems } = useContext(CheckoutContext);
  return (
    <>
      <ul className="cart-items">
        {cartItems.length == 0 ? (
          <h1>There is nothing in the cart</h1>
        ) : (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        )}
      </ul>
      <Checkout />
    </>
  );
};
export default CartItems;
