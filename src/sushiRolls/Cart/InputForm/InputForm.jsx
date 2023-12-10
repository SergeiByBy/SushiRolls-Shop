import React, { useState } from "react";

const ContactForm = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={handlePhoneChange}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
};

export default ContactForm;
