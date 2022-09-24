import { useContext } from "react";
import { DashboardContext } from "../../Contexts/DashboardContext";

const AdminManage = () => {
  const { setMenuState, menuState, setName, setQuantity, setPrice, setType } =
    useContext(DashboardContext);
  return (
    <form
      className={`dashboard-edit ${menuState}`}
      onSubmit={() => manageForm()}
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
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name" className="input-label">
          Name
        </label>
      </div>
      <div className="input-container">
        <input
          type="text"
          className="dashboard-input"
          id="type"
          required
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="type" className="input-label">
          Type
        </label>
      </div>

      <div className="input-container">
        <input
          type="text"
          className="dashboard-input"
          id="quantity"
          required
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label htmlFor="name" className="input-label">
          Quantity
        </label>
      </div>
      <div className="input-container">
        <input
          type="text"
          className="dashboard-input"
          id="Price"
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="name" className="input-label">
          Price
        </label>
      </div>
      <div className="input-container file">
        <input
          type="file"
          id="product-photo"
          className="photo-input"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={(e) => e.value}
        ></input>
        <label className="photo-label" htmlFor="product-photo">
          Name
        </label>
      </div>
      <button className="product-button">Add/Update</button>
    </form>
  );
};
export default AdminManage;
