import Link from "next/link";
import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";

// eslint-disable-next-line no-unused-vars
const AnonymusDropdown = () => {
  return (
    <div className="user-dropdown open">
      <div className="dropdown-header">
        <div className="user-dropdown-item">Welcome</div>
      </div>
      <Link href={"/Login"}>
        <div className="user-dropdown-item">Log in</div>
      </Link>
      <div className="user-dropdown-item">Register</div>
    </div>
  );
};

const UserDropdown = () => {
  return (
    <div className="user-dropdown open">
      <div className="dropdown-header">
        <div className="user-dropdown-item">Hello Name</div>
      </div>
      <div className="user-dropdown-item">Profile</div>
      <div className="user-dropdown-item">My Products</div>
      <div className="user-dropdown-item">Logout</div>
    </div>
  );
};

const UserProfile = () => {
  const { user } = useContext(LoginContext);
  return (
    <div className="user-img-wrapper">
      <img
        className="navbar-user-img"
        src="images/dummy-speaker-image.jpg"
        alt=""
      />
      {user ? <UserDropdown /> : <AnonymusDropdown />}
    </div>
  );
};
export default UserProfile;
