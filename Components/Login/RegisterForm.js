import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
import useRegister from "../../Hooks/useRegister";
import LoadingSpinner from "../LoadingSpinner";

const RegisterCreds = ({ username, password }) => {
  return (
    <div className="register-cred">
      <input
        type="text"
        name="username"
        id="username"
        className="login-input-area register-area"
        placeholder="Username"
        required
        ref={username}
      />
      <input
        type="text"
        name="password"
        id="regPassword"
        className="login-input-area register-area"
        placeholder="Password"
        required
        ref={password}
      />
    </div>
  );
};

const RegisterInfo = ({ name, surname, email }) => {
  return (
    <div className="register-info">
      <input
        type="text"
        name="username"
        id="regName"
        className="login-input-area register-area"
        placeholder="Name"
        required
        ref={name}
      />
      <input
        type="text"
        name="Surname"
        id="Surname"
        className="login-input-area register-area"
        placeholder="Surname"
        required
        ref={surname}
      />
      <input
        type="email"
        name="Email"
        id="regEmail"
        className="login-input-area register-area"
        placeholder="Email"
        required
        ref={email}
      />
    </div>
  );
};

const RegisterForm = () => {
  const { setMenuState } = useContext(LoginContext);
  const {
    regUsernameRef,
    regPasswordRef,
    regEmailRef,
    regNameRef,
    regSurnameRef,
    isSuccessful,
    handleRegister,
  } = useRegister();
  return (
    <form className="register-form" onSubmit={(e) => handleRegister(e)}>
      <h2>Register</h2>
      <div className="register-wrapper">
        <RegisterCreds username={regUsernameRef} password={regPasswordRef} />
        <RegisterInfo
          email={regEmailRef}
          name={regNameRef}
          surname={regSurnameRef}
        />
      </div>
      <button className="product-button login-button">Register</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span onClick={() => setMenuState()} style={{ cursor: "pointer" }}>
          Already Have an account ? Log in!
        </span>
        {isSuccessful ? <LoadingSpinner /> : null}
      </div>
    </form>
  );
};

export default RegisterForm;
