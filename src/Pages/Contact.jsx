import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Contact = () => {
  const defaultSetContact = {
    name: "",
    email: "",
    message: "",
  };

  const [contact, setContact] = useState(defaultSetContact);

  const [userData, setUserData] = useState(true);
  const { user,API } = useAuth();

  useEffect(() => {
    if (userData && user) {
      setContact({
        name: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
  }, [user, userData]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API}/api/form/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    if (response.ok) {
      setContact(defaultSetContact);
      toast.success("Message sent successfully!");
    }
  };

  return (
    <>
      <div className="full-page">
        <main>
          <section className="contact-section">
            <div className="container grid grid-two-cols">
              <div className="contact-img">
                <h1 className="main-heading mb-3">Contact Us</h1>
                <img
                  src="/images/contact.png"
                  alt=""
                  width="500"
                  height="400"
                />
              </div>
              <div className="contact-form">
                <br />
                <form onSubmit={handleForm} autoComplete="off">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={contact.name}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      value={contact.email}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      rows="7"
                      value={contact.message}
                      onChange={handleInput}
                      required
                    ></textarea>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <section className="mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.376449353515!2d74.3379742393527!3d31.43219223806642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906fda3ba9fe9%3A0x3b75e5dab154f3a2!2sPak-Arab%20Housing%20Scheme%2C%20Lahore%2C%20Punjab%2C%20  Pakistan!5e0!3m2!1sen!2s!4v1720337978248!5m2!1sen!2s"
                width="100%"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};
