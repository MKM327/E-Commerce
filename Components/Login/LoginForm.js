import useLoginAPI from "../../Hooks/useLoginAPI";

const LoginForm = () => {
  const { setPassword, setUsername, handleSubmit, user } = useLoginAPI();
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {user ? <h1>USER</h1> : <h1>Test</h1>}
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
