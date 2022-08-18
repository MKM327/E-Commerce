const DashboardUser = ({ user }) => {
  const { username, password, role } = user;
  return (
    <tr className="dashboard-item">
      <td className="dashboard-column">{username}</td>
      <td className="dashboard-column">{password}</td>
      <td className="dashboard-column">{role}</td>
    </tr>
  );
};
export default DashboardUser;
