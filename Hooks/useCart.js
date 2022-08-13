import { useEffect, useState } from "react";
const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(renderCartItems, []);
  function calculateTotalCost() {
    let total = 0;
    cartItems.forEach((item) => {
      if (item.SelectedQuantity) {
        total += item.price * item.SelectedQuantity;
      } else {
        total += item.price;
      }
    });
    return total;
  }
  function renderCartItems() {
    const itemArray = [];
    Object.keys(sessionStorage).forEach((key) => {
      const item = JSON.parse(sessionStorage.getItem(key));
      itemArray.push(item);
    });
    setCartItems(itemArray);
  }
  return { cartItems, calculateTotalCost, renderCartItems };
};
export default useCart;
