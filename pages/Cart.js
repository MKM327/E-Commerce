import CartItems from "../Components/Cart/Cart-Items";
import Navbar from "../Components/NavigationBar/Navbar";
const Cart = () => {
  return (
    
    <div>
      <Navbar />
      <div className="cart-container">
        <CartItems />
      </div>
    </div>
  );
};
export default Cart;
