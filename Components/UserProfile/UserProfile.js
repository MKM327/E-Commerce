import { ProfileProvider } from "../../Contexts/ProfileContext";
import ProfileInfo from "./ProfileInfo";
import UserProducts from "./UserProducts";

const UserProfile = () => {
  return (
    <ProfileProvider>
      <div className="container profile">
        <ProfileInfo />
        <UserProducts />
      </div>
    </ProfileProvider>
  );
};
export default UserProfile;
