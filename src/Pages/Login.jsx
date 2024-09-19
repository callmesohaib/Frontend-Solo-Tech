import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
export const Login = () => {
  const [user, userSet] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    userSet({ ...user, [name]: value });
  };
  const navigate = useNavigate();
  const { storeTokenInLS,API } = useAuth();
  const handleForm = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const res_data = await response.json();
    if (response.ok) {
      storeTokenInLS(res_data.token);
      userSet({ email: "", password: "" });
      toast.success("Login successfully");
      navigate("/");
    } else {
      toast.error(
        res_data.extraDetails ? res_data.extraDetails : res_data.message
      );
    }
  };
  return (
    <>
      <div className="full-page">
        <section>
          <main>
            <div className="section-login">
              <div className="container grid grid-two-cols">
                <div className="login-img">
                  <img
                    src="/images/login.png"
                    alt=""
                    width="600"
                    height="400"
                  />
                </div>
                <div className="login-form">
                  <h1 className="main-heading mb-3">Login Page</h1>
                  <br />
                  <form autoComplete="off" onSubmit={handleForm}>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="email"
                        value={user.email}
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        id="password"
                        value={user.password}
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-submit">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
};
