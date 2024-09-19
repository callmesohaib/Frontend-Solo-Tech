import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken,API } = useAuth();
  const navigate = useNavigate();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `${API}/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authorizationToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Update Successfully");
        navigate("/admin/users");
      } else {
        toast.error("Failed to update User");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <>
        <div className="full-page">

      <section className="update-container">
        <div className="container">
          <h1 className="main-heading">Update User</h1>
        </div>
        <div className="container grid grid-two-cols">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                id="username"
                onChange={handleInput}
                value={data.username}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                id="email"
                required
                onChange={handleInput}
                value={data.email}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                id="phone"
                required
                onChange={handleInput}
                value={data.phone}
              />
            </div>
            <br />

            <button type="submit" className="btn btn-submit">
              Update Now
            </button>
          </form>
        </div>
      </section></div>
    </>
  );
};
