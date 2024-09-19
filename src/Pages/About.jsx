import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();

  return (
    <>
        <div className="full-page">
      <main>
        <section className="about-section">
          <div className="container grid grid-two-cols">
            <div className="about-content">
              <p>
                Welcome
                {user ? `, ${user.username} to our website` : ` to our website`}
              </p>
              <h1 className="main-heading">About Us</h1>
              <p>A brand for a company is like a reputation for a person.</p>
              <p>
                We empower businesses with innovative technology that drives
                growth, enhances efficiency, and creates new opportunities.
              </p>
              <p>
                Our future-ready IT solutions are designed to adapt and grow
                with your business, ensuring long-term success and
                sustainability.
              </p>
              <p>
                We believe in the power of collaboration, working closely with
                our clients to turn their visions into tangible technological
                advancements.
              </p>
              <p>
                Security is our top priority; we build robust, secure systems
                that protect your data and build trust with our clients.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">Connect Now</button>
                </NavLink>
                <NavLink to="/service">
                  <button className="btn secondary-btn">Learn more</button>
                </NavLink>
              </div>
            </div>
            <div className="about-img">
              <img src="/images/boy.png" alt="" width="500" height="400" />
            </div>
          </div>
        </section>
      </main>

      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Company Registers</p>
          </div>
          <div className="div1">
            <h2>150+</h2>
            <p>Projects Done</p>
          </div>
          <div className="div1">
            <h2>250+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>650K+</h2>
            <p>YouTube Subscribers</p>
          </div>
        </div>
      </section></div>
    </>
  );
};
