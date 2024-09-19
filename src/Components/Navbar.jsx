import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { useState } from "react";

export const Navbar = () => {
  const { user, isloggedIn } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header>
        <div className="container navbar">
          <div className="logo-brand">
            <NavLink to="/">Solo-Tech</NavLink>
          </div>
          <nav>
            <ul>
              <div className="desktopMenu">
                <li>
                  <NavLink to="/"> Home</NavLink>
                </li>
                {user?.is_Admin && (
                  <li>
                    <NavLink to="/admin">Admin</NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/about"> About</NavLink>
                </li>
                <li>
                  <NavLink to="/service"> Service</NavLink>
                </li>
                <li>
                  <NavLink to="/contact"> Contact</NavLink>
                </li>
                {isloggedIn ? (
                  <li>
                    <NavLink to="/logout"> Logout</NavLink>
                  </li>
                ) : (
                  <>
                    <li>
                      <NavLink to="/register"> Register</NavLink>
                    </li>
                    <li>
                      <NavLink to="/login"> Login</NavLink>
                    </li>
                  </>
                )}{" "}
              </div>
              <li>
                <i
                  class="bx bx-menu-alt-right mobMenu"
                  onClick={() => setShowMenu(!showMenu)}
                ></i>
              </li>
              <div
                className="navMenu"
                style={{ display: showMenu ? "flex" : "none" }}
              >
                <li>
                  <NavLink to="/" onClick={() => setShowMenu(false)}>
                    Home
                  </NavLink>
                </li>
                {user?.is_Admin && (
                  <li>
                    <NavLink to="/admin" onClick={() => setShowMenu(false)}>
                      Admin
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/about" onClick={() => setShowMenu(false)}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/service" onClick={() => setShowMenu(false)}>
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={() => setShowMenu(false)}>
                    Contact
                  </NavLink>
                </li>
                {isloggedIn ? (
                  <li>
                    <NavLink to="/logout" onClick={() => setShowMenu(false)}>
                      Logout
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li>
                      <NavLink
                        to="/register"
                        onClick={() => setShowMenu(false)}
                      >
                        Register
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/login" onClick={() => setShowMenu(false)}>
                        Login
                      </NavLink>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
