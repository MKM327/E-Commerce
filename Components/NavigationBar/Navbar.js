import Link from "next/link";

Link;
const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-elements">
        <Link href={"/"}>
          <li>Shop</li>
        </Link>
        <Link href={"/Cart"}>
          <li>Cart</li>
        </Link>
        <li>Sign in</li>
      </ul>
    </nav>
  );
};
export default Navbar;
