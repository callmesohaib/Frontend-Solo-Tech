import { useAuth } from "../store/auth";
export const Service = () => {
  const { services } = useAuth();

  if (services || services.length !== 0) {
    return (
      <div className="full-page">
        <section className="section-services">
          <div className="container">
            <h1 className="main-heading">Services</h1>
          </div>
          <div className="container grid grid-three-cols">
            {services.map((curElement, index) => {
              const { service, description, provider, price, img } = curElement;
              return (
                <div className="card" key={index}>
                  <div className="card-img">
                    <img src={`/images/${img}`} alt={service} width="200" />
                  </div>
                  <div className="card-details">
                    <div className="grid grid-two-cols service-grid">
                      <p>{provider}</p>
                      <p>{price}</p>
                    </div>
                    <h2>{service}</h2>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
};
