const RegisterForm = () => {
  return (
    <form className="login-form">
      <h2>Sign in</h2>
      <input
        type="text"
        name="username"
        id="username"
        className="login-input-area"
        placeholder="Username"
        required
      />
      <input
        type="password"
        name="username"
        id="username"
        className="login-input-area"
        required
        placeholder="Password"
      />
      <button className="product-button login-button">Sign in</button>
      <span style={{ cursor: "pointer" }}>Dont Have Account ? Register!</span>
    </form>
  );
};

export default RegisterForm;
