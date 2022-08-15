import Link from "next/link";
import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";

const SignInButton = () => {
  const { user, logOut } = useContext(LoginContext);
  return user ? (
    <li onClick={() => logOut()}>Log out</li>
  ) : (
    <Link href={"/Login"}>
      <li>Sign in</li>
    </Link>
  );
};
export default SignInButton;
