import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Error fetching users");
      }
      console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      getAllUsersData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <div className="full-page admin-page">
        <section className="admin-users-section">
          <div className="container">
            <h1 className="main-heading admin-heading">Admin User Data</h1>
          </div>
          <div className="container admin-users">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((curUser, index) => (
                  <tr key={index}>
                    <td data-label="Username">{curUser.username}</td>
                    <td data-label="Email">{curUser.email}</td>
                    <td data-label="Phone">{curUser.phone}</td>
                    <td data-label="Edit" className="updateLink">
                      <Link to={`/admin/users/${curUser._id}`}>Edit</Link>
                    </td>
                    <td data-label="Delete">
                      <div
                        className="btn btn-danger contact-btn"
                        onClick={() => deleteUser(curUser._id)}
                      >
                        Delete
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};
