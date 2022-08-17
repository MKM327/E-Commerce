import Dashboard from "../Components/AdminDashboard/Dashboard";
import HandleRoles from "../Components/HandleRoles";
const Admin = () => {
  return (
    <HandleRoles role={"admin"} pageCheck={true}>
      <Dashboard />
    </HandleRoles>
  );
};
export default Admin;
