import React, { useState } from "react";

const InputValidator = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const isValid = /^[a-zA-Zа-яА-Я]{0,20}$/.test(inputValue);

    if (isValid) {
      const capitalizedInput =
        inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
      setName(capitalizedInput);
    }
  };

  return (
    <input
      className="form-control"
      type="text"
      value={name}
      onChange={handleChange}
      placeholder="Введите ваше имя"
      maxLength={20}
    />
  );
};

export default InputValidator;