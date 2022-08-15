import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
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
          <HandleRoles role={"Admin"}>
            <AdminNavbar />
          </HandleRoles>
          <HandleRoles role={"Customer"}>
            <UserNavbar />
          </HandleRoles>
        </>
      ) : null}
    </nav>
  );
};
export default Navbar;
