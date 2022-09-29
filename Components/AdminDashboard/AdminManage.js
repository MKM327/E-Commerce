import { useContext } from "react";
import { DashboardContext } from "../../Contexts/DashboardContext";

const AdminManage = () => {
  const {
    setMenuState,
    menuState,
    setDescription,
    setQuantity,
    setPrice,
    setType,
    setPhoto,
    photo,
    manageForm,
    loading,
  } = useContext(DashboardContext);
  return (
    <form
      className={`dashboard-edit ${menuState}`}
      onSubmit={(e) => {
        e.preventDefault();
        manageForm();
      }}
    >
      <div className="dashboard-quit">
        <div className="quit-item" onClick={() => setMenuState()}>
          X
        </div>
      </div>
      <div className="input-container">
        <input
          type="text"
          className="dashboard-input"
          id="name"
          required
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          className="dashboard-input"
          id="type"
          required
          onChange={(e) => setType(e.target.value)}
          placeholder="Type"
        />
      </div>

      <div className="input-container">
        <input
          type="text"
          className="dashboard-input"
          id="quantity"
          required
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          className="dashboard-input"
          id="Price"
          required
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
      </div>
      <div className="input-container file">
        <input
          type="file"
          id="product-photo"
          className="photo-input"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={(e) => setPhoto(e.target.files[0])}
        ></input>
        {photo != null ? (
          <label className="photo-label" htmlFor="product-photo">
            {photo.name}
          </label>
        ) : (
          <label className="photo-label" htmlFor="product-photo">
            Upload Photo
          </label>
        )}
      </div>
      <button className="product-button">Add/Update</button>
    </form>
  );
};
export default AdminManage;
