import { createContext } from "react";
import useCart from "../Hooks/useCart";
const CheckoutContext = createContext();
const CheckoutProvider = ({ children }) => {
  const { cartItems, calculateTotalCost, renderCartItems } = useCart();
  return (
    <CheckoutContext.Provider
      value={{ cartItems, calculateTotalCost, renderCartItems }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
export { CheckoutContext, CheckoutProvider };
