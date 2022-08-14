import "../Styles/styles.css";
import "../Styles/cart.css";
import "../Styles/login.css";
import { LoginProvider } from "../Contexts/LoginContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <LoginProvider>
      <Component {...pageProps} />
    </LoginProvider>
  );
};
export default MyApp;
