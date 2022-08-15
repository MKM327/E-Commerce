import { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
const CheckRole = (role) => {
  const { user } = useContext(LoginContext);
  if (user == null) {
    return role == "Customer";
  }
  if (user.role === role) {
    return true;
  } else {
    return false;
  }
};
const HandleRoles = ({ children, role }) => {
  const permitted = CheckRole(role);
  return <>{permitted && children}</>;
};
export default HandleRoles;
