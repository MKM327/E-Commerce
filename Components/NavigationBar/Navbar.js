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
        <Link href={"/Login"}>
          <li>Sign in</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
