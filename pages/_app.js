import "../Styles/styles.css";
import "../Styles/cart.css";
import "../Styles/login.css";
import "../Styles/dashboard.css";
import "../Styles/navbar.css";
import "../Styles/AddProduct.css";
import "../Styles/UserProfile.css";
import { LoginProvider } from "../Contexts/LoginContext";
import { ProductProvider } from "../Contexts/ProductsContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ProductProvider>
      <LoginProvider>
        <Component {...pageProps} />
      </LoginProvider>
    </ProductProvider>
  );
};
export default MyApp;
