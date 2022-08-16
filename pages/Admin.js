import HandleRoles from "../Components/HandleRoles";
const Admin = () => {
  return (
    <HandleRoles role={"admin"}>
      <div>
        <h1>Admin</h1>
      </div>
    </HandleRoles>
  );
};
export default Admin;
