import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="full-page">
        {/* ------------------------------ Hero-Content ------------------------------  */}
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>We are the World Best IT Company</p>
                <h1>Welcome to Solo-Tech</h1>
                <p>
                  Our mission is to make technology accessible to everyone. We
                  believe in empowering individuals to create their own stories.
                  <br />
                  We are a team of passionate professionals who work tirelessly
                  to create a better future for everyone.
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
              {/* ------------------------------- Hero-Image -------------------------------  */}

              <div className="hero-image">
                <img src="/images/man.png" alt="" />
              </div>
            </div>
          </section>
        </main>

        {/* ------------------------------- Services Section -------------------------------  */}

        <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="div1">
              <h2>50+</h2>
              <p>Register companies</p>
            </div>
            <div className="div1">
              <h2>100,00+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="div1">
              <h2>500+</h2>
              <p>Well Known Developers</p>
            </div>
            <div className="div1">
              <h2>24/7</h2>
              <p>service</p>
            </div>
          </div>
        </section>

        {/* ------------------------------- Services Section -------------------------------  */}

        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              {/* ------------------------------- Hero-Image -------------------------------  */}

              <div className="hero-image last-pic">
                <img src="/images/design.png" height="400" width="600" alt="" />
              </div>
              <div className="hero-content">
                <p>We are here to help you</p>
                <h1>Get started today</h1>
                <p>
                  Ready to take the first step towards a more efficient and
                  secure IT infrastructure? Contact us today for a free
                  consultation let's discuss how Solo-tech can help your
                  business thrive in the digital age.
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
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
