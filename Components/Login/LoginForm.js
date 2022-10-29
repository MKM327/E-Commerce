import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
const LoginForm = () => {
  const { usernameRef, passwordRef, handleSubmit, isInvalid, setMenuState } =
    useContext(LoginContext);
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {isInvalid ? <span>Invalid username or Password</span> : null}
      <h2>Sign in</h2>
      <input
        type="text"
        name="username"
        id="username"
        className="login-input-area"
        placeholder="Username"
        required
        ref={usernameRef}
      />
      <input
        type="password"
        name="username"
        id="username"
        className="login-input-area"
        required
        placeholder="Password"
        ref={passwordRef}
      />
      <button className="product-button login-button">Sign in</button>
      <span style={{ cursor: "pointer" }} onClick={() => setMenuState()}>
        Dont Have Account ? Register!
      </span>
    </form>
  );
};
export default LoginForm;
