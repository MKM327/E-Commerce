import Link from "next/link";
import UserProfile from "./UserProfile";
const UserNavbar = () => {
  return (
    <>
      <Link href={"/"}>
        <div>Test</div>
      </Link>
      <div className="navbar-search">
        <input type="text" name="" id="" placeholder="Search" />
      </div>
      <div className="navbar-icons">
        <UserProfile />
        <Link href={"/Cart"}>
          <div className="cart-flex">
            <img src="images/shopping-cart.png" alt="" />
            <div className="cart-text">Cart</div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default UserNavbar;
