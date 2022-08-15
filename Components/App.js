import { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import Navbar from "./NavigationBar/Navbar";
import Products from "./Products/Products";
const App = () => {
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
