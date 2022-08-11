import Navbar from "../Components/NavigationBar/Navbar";
import useCart from "../Hooks/useCart";

const Cart = () => {
  const { cartItems } = useCart();
  return (
    <div>
      <Navbar />
      {cartItems.map((item) => {
        return <h1>{item.id}</h1>;
      })}
    </div>
  );
};
export default Cart;
