const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <form className="login-form">
          <h2>Sign in</h2>
          <input
            type="text"
            name="username"
            id="username"
            className="login-input-area"
            placeholder="Username"
          />
          <input
            type="text"
            name="username"
            id="username"
            className="login-input-area"
            placeholder="Password"
          />
          <button className="product-button login-button">Sign in</button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
