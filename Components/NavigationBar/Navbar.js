import Link from "next/link";
import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
const SignInButton = () => {
  const { user, setUser } = useContext(LoginContext);

  return user ? (
    <li onClick={() => setUser(null)}>Log out</li>
  ) : (
    <Link href={"/Login"}>
      <li>Sign in</li>
    </Link>
  );
};
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
        <SignInButton />
      </ul>
    </nav>
  );
};
export default Navbar;
