import { useEffect, useState } from "react";
import HandleRoles from "../HandleRoles";
import AdminNavbar from "./AdminNavbar";
import UserNavbar from "./UserNavbar";

const Navbar = () => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  return (
    <nav>
      {rendered == true ? (
        <>
          <HandleRoles role={"admin"}>
            <AdminNavbar />
          </HandleRoles>
          <HandleRoles role={"customer"}>
            <UserNavbar />
          </HandleRoles>
        </>
      ) : null}
    </nav>
  );
};
export default Navbar;
