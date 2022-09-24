import { useContext } from "react";
import { DashboardContext } from "../../Contexts/DashboardContext";

const AdminManage = () => {
  const { setMenuState, menuState } = useContext(DashboardContext);
  return (
    <form
      className={`dashboard-edit ${menuState}`}
      onClick={(e) => e.preventDefault()}
    >
      <div className="dashboard-quit">
        <div className="quit-item" onClick={() => setMenuState()}>
          X
        </div>
      </div>
      <div className="input-container">
        <input type="text" className="dashboard-input" id="name" />
        <label htmlFor="name" className="input-label">
          Name
        </label>
      </div>
      <div className="input-container">
        <input type="text" className="dashboard-input" id="type" />
        <label htmlFor="type" className="input-label">
          Type
        </label>
      </div>
      <div className="input-container">
        <input type="text" className="dashboard-input" id="price" />
        <label htmlFor="name" className="input-label">
          Name
        </label>
      </div>
      <div className="input-container">
        <input type="text" className="dashboard-input" id="quantity" />
        <label htmlFor="name" className="input-label">
          Quantity
        </label>
      </div>
      <div className="input-container">
        <input type="file"></input>
      </div>
      <button className="product-button">Add/Update</button>
    </form>
  );
};
export default AdminManage;
