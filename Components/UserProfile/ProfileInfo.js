import useUserInfo from "../../Hooks/useUserInfo";
const ChangePassword = () => {
  return (
    <form className="profile-info">
      <div>
        <label htmlFor="Name">Old Password</label>
        <input type="email" className="add-input" id="Name" />
      </div>
      <div>
        <label htmlFor="Name">New Password</label>
        <input type="email" className="add-input" id="Name" />
      </div>
      <button className="add-btn">Update Password</button>
    </form>
  );
};
const ChangeInfo = ({ userProfile }) => {
  const { name, email, surname } = userProfile;
  return (
    <form className="profile-info">
      <div>
        <label htmlFor="Name">Name</label>
        <input type="text" className="add-input" id="Name" value={name} />
      </div>
      <div>
        <label htmlFor="Name">Surname</label>
        <input type="text" className="add-input" id="Name" value={surname} />
      </div>
      <div>
        <label htmlFor="Name">Email</label>
        <input type="email" className="add-input" id="Name" value={email} />
      </div>
      <button className="add-btn">Update</button>
    </form>
  );
};
const ProfileInfo = () => {
  const { user, loading } = useUserInfo();
  return (
    <div className="profile-update">
      {!loading ? (
        <ChangeInfo userProfile={user.userProfile} />
      ) : (
        <div>Loading...</div>
      )}
      <ChangePassword />
    </div>
  );
};
export default ProfileInfo;
