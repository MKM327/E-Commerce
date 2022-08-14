import { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import Navbar from "./NavigationBar/Navbar";
import Products from "./Products/Products";
const App = () => {
  const { user } = useContext(LoginContext);
  return (
    <>
      <Navbar />
      <div className="container">
        <Products />
      </div>
    </>
  );
};
export default App;
