import { useContext } from "react";
import { LoginContext } from "../../../Contexts/LoginContext";
import DashboardUser from "./DashboardUser";
const DashboardUsers = () => {
  const { allUsers, isLoading } = useContext(LoginContext);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        allUsers.map((user) => {
          return <DashboardUser user={user} key={user.id} />;
        })
      )}
    </>
  );
};
export default DashboardUsers;
