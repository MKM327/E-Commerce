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
const HandleRoles = ({ children, role, pageCheck = false }) => {
  const permitted = CheckRole(role);
  return (
    <>
      {pageCheck ? (
        permitted ? (
          children
        ) : (
          <RoleErrorComponent />
        )
      ) : (
        permitted && children
      )}
    </>
  );
};
export default HandleRoles;
