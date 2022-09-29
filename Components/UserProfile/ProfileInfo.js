const ProfileInfo = () => {
  return (
    <div className="profile-update">
      <div className="profile-info">
        <div>
          <label htmlFor="Name">Name</label>
          <input type="text" className="add-input" id="Name" />
        </div>
        <div>
          <label htmlFor="Name">Surname</label>
          <input type="text" className="add-input" id="Name" />
        </div>
        <div>
          <label htmlFor="Name">Email</label>
          <input type="email" className="add-input" id="Name" />
        </div>
        <button className="add-btn">Update</button>
      </div>
      <div className="profile-info">
        <div>
          <label htmlFor="Name">Old Password</label>
          <input type="email" className="add-input" id="Name" />
        </div>
        <div>
          <label htmlFor="Name">New Password</label>
          <input type="email" className="add-input" id="Name" />
        </div>
        <button className="add-btn">Update Password</button>
      </div>
    </div>
  );
};
export default ProfileInfo;
