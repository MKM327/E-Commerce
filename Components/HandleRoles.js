import { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import RoleErrorComponent from "./RoleErrorComponent";
const CheckRole = (role) => {
  const { user } = useContext(LoginContext);
  if (user == null) {
    return role == "customer";
  }
  if (user.role.toLowerCase() === role) {
    return true;
  } else {
    return false;
  }
};
const HandleRoles = ({ children, role }) => {
  const permitted = CheckRole(role);
  return <>{permitted ? children : <RoleErrorComponent />}</>;
};
export default HandleRoles;
