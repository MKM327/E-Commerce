import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
import Link from "next/link";
const LoginForm = () => {
  const { setPassword, setUsername, handleSubmit, user } =
    useContext(LoginContext);
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {!user ? <span>Invalid username or Password</span> : null}
      <h2>Sign in</h2>
      <input
        type="text"
        name="username"
        id="username"
        className="login-input-area"
        placeholder="Username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        name="username"
        id="username"
        className="login-input-area"
        required
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="product-button login-button">Sign in</button>
    </form>
  );
};
export default LoginForm;
