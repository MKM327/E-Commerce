import Link from "next/link";
import SignInButton from "./SignInButton";

const AdminNavbar = () => {
  return (
    <ul className="navbar-elements">
      <Link href={"/"}>
        <li>Shop</li>
      </Link>
      <Link href={"/Cart"}>
        <li>Cart</li>
      </Link>
      <SignInButton />
    </ul>
  );
};
export default AdminNavbar;
