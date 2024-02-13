import { useState } from "react";
import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";
import "./styles/index.css";
import NavBar from "./components/NavBar";

const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);
  const [err, setErr] = useState(true);
  const addContactData = (contactData) => {
    const allContacts = [...contacts, contactData];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  const triggerError = (flag) => {
    setErr(!flag);
  };

  const clearContacts = () => {
    localStorage.clear();
    setContacts([]);
  };

  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder
          onContactAdded={addContactData}
          showError={triggerError}
        />
        <span
          style={{ color: "red", marginLeft: "2px", fontSize: "medium" }}
          hidden={err}
        >
          **Please fill up all fields.
        </span>
      </div>
      <div className="contact_list">
        <h3>Contact List:</h3>
        {contacts.map((e, index) => (
          <Contact key={index} data={e} />
        ))}
        <br />
        <button
          style={{ background: "#ee1c1c" }}
          onClick={clearContacts}
          hidden={contacts.length === 0}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default App;
