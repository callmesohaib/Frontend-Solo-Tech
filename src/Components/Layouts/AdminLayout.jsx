import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log("Admin-Layout", user);
  if (isLoading) {
    return (
      <div className="full-page">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (!user.is_Admin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="full-page admin-layout">
        <header>
          <div className="container options">
            <nav>
              <ul>
                <li>
                  <NavLink to="/admin/users">
                    <div className="icon">
                      <FaUser />
                    </div>
                    Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/contacts">
                    <div className="icon">
                      <FaMessage />
                    </div>
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Outlet />
      </div>
    </>
  );
};
