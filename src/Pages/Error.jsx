import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <div className="full-page">
        <section id="error-page">
          <div className="  content">
            <h2 className="header">404</h2>
            <h4>Sorry! Page not found</h4>
            <p>
              The page you're looking for might have been removed, had its name
              changed, or is temporarily unavailable. Please try your search
              again or contact the site administrator for assistance.
            </p>
            <div className="btns">
              <NavLink to="/">return home</NavLink>
              <NavLink to="/contact">report problem</NavLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
