import { useContext } from "react";
import { ProfileContext } from "../../Contexts/ProfileContext";
import LoadingSpinner from "../LoadingSpinner";
const ChangePassword = () => {
  const { HandlePasswordUpdate, oldPasswordRef, newPasswordRef } =
    useContext(ProfileContext);
  return (
    <form className="profile-info" onSubmit={(e) => HandlePasswordUpdate(e)}>
      <div>
        <label htmlFor="Name">Old Password</label>
        <input
          type="text"
          className="add-input"
          id="Name"
          ref={oldPasswordRef}
        />
      </div>
      <div>
        <label htmlFor="Name">New Password</label>
        <input
          type="password"
          className="add-input"
          id="Name"
          ref={newPasswordRef}
        />
      </div>
      <button className="add-btn">Update Password</button>
    </form>
  );
};
const ChangeInfo = () => {
  const {
    user,
    nameRef,
    SurnameRef,
    EmailRef,
    HandleProfileUpdate,
    isUpdateFinished,
  } = useContext(ProfileContext);
  const { userProfile } = user;
  const { name, email, surname } = userProfile;
  return (
    <form className="profile-info" onSubmit={(e) => HandleProfileUpdate(e)}>
      <div>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          className="add-input"
          id="Name"
          defaultValue={name}
          ref={nameRef}
        />
      </div>
      <div>
        <label htmlFor="Name">Surname</label>
        <input
          type="text"
          className="add-input"
          id="surname"
          defaultValue={surname}
          ref={SurnameRef}
        />
      </div>
      <div>
        <label htmlFor="Name">Email</label>
        <input
          type="email"
          className="add-input"
          id="email"
          defaultValue={email}
          ref={EmailRef}
        />
      </div>
      <div className="user-update-flex">
        <button className="add-btn">Update</button>

        <LoadingSpinner loading={isUpdateFinished} />
      </div>
    </form>
  );
};
const ProfileInfo = () => {
  const { loading } = useContext(ProfileContext);
  return (
    <div className="profile-update">
      {!loading ? <ChangeInfo /> : <div>Loading...</div>}
      <ChangePassword />
    </div>
  );
};
export default ProfileInfo;
