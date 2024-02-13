import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      phone,
      address: location,
    };

    if (name.length < 1 || phone.length < 1 || location.length < 1) {
      props.showError(true);
      return;
    }
    props.onContactAdded(contactData);
    props.showError(false);
    setName("");
    setPhone("");
    setLocation("");
  };

  return (
    <>
      <div className="simpleAdder">
        <h3>Contact Adder:</h3>
        <form onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contact"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <br />
          <button>Add Contact</button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
