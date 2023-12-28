import React, { useState } from "react";

const InputValidator = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const capitalizedInput =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setName(capitalizedInput);
  };
  return (
    <input
      className="form-control"
      type="text"
      value={name}
      onChange={handleChange}
      placeholder="Введите ваше имя"
      maxLength={25}
    />
  );
};

export default InputValidator;
