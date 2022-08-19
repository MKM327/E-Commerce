import { useContext } from "react";
import { DashboardContext } from "../../../Contexts/DashboardContext";

const DashboardUser = ({ user }) => {
  const { clickedRow, setClickedRow } = useContext(DashboardContext);
  const { username, password, role } = user;
  return (
    <tr
      className={
        clickedRow.id === user.id ? "dashboard-item clicked" : "dashboard-item"
      }
      onClick={() => {
        setClickedRow(user);
      }}
    >
      <td className="dashboard-column">{username}</td>
      <td className="dashboard-column">{password}</td>
      <td className="dashboard-column">{role}</td>
    </tr>
  );
};
export default DashboardUser;
