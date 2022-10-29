import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginPage = () => {
  const { menuState } = useContext(LoginContext);
  return (
    <div className="login-container">
      <div className="login-wrapper">
        {menuState == "Login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};
export default LoginPage;
