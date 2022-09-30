import Link from "next/link";
import { useContext, useState } from "react";
import { LoginContext } from "../../Contexts/LoginContext";

// eslint-disable-next-line no-unused-vars
const AnonymusDropdown = ({ isOpen }) => {
  return (
    <div className={`user-dropdown ${isOpen}`}>
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

const UserDropdown = ({ isOpen }) => {
  const { user, logOut } = useContext(LoginContext);
  return (
    <div className={`user-dropdown ${isOpen}`}>
      <div className="dropdown-header">
        <div className="user-dropdown-item">{`Hello ${user.userProfile.name}`}</div>
      </div>

      <Link href={"/Profile"}>
        <div className="user-dropdown-item">Profile</div>
      </Link>
      <div className="user-dropdown-item">My Products</div>
      <div className="user-dropdown-item" onClick={() => logOut()}>
        Logout
      </div>
    </div>
  );
};

const UserProfile = () => {
  const { user } = useContext(LoginContext);
  const [isOpen, setIsOpen] = useState("closed");
  useState;
  return (
    <div
      className="user-img-wrapper"
      onMouseEnter={() => setIsOpen("open")}
      onMouseLeave={() => setIsOpen("closed")}
    >
      <img
        className="navbar-user-img"
        src="images/dummy-speaker-image.jpg"
        alt=""
      />
      {user ? (
        <UserDropdown isOpen={isOpen} />
      ) : (
        <AnonymusDropdown isOpen={isOpen} />
      )}
    </div>
  );
};
export default UserProfile;
