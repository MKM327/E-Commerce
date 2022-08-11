import { useEffect, useState } from "react";
const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const itemArray = [];
    Object.keys(sessionStorage).forEach((key) => {
      const item = JSON.parse(sessionStorage.getItem(key));
      itemArray.push(item);
    });
    setCartItems(itemArray);
  }, []);
  return { cartItems };
};
export default useCart;
