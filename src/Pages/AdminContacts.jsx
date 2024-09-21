import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

export const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const { authorizationToken, API } = useAuth();
  const getAllContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await fetch(`${API}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      getAllContactsData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllContactsData();
  }, []);

  return (
    <>
      <div className="full-page">
        <section className="admin-contacts-section">
          <div className="container">
            <h1 className="main-heading admin-heading">Admin Contact Data</h1>
          </div>
          <div className="container admin-users">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((curContact, index) => (
                  <tr key={index}>
                    <td data-label="Name">{curContact.name}</td>
                    <td data-label="Email">{curContact.email}</td>
                    <td data-label="Message">{curContact.message}</td>
                    <td data-label="Delete">
                      <div
                        className="btn btn-danger contact-btn"
                        onClick={() => deleteContact(curContact._id)}
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
