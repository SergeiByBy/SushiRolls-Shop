import React, { useState } from "react";

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;

    // Удаляем все символы, кроме цифр
    value = value.replace(/\D/g, "");

    // Проверяем, начинается ли номер с +7 или 8
    if (
      value.startsWith("7") ||
      value.startsWith("8") ||
      value.startsWith("+")
    ) {
      // Если номер начинается с 8, заменяем его на +7
      if (value.startsWith("8", "1", "2", "3", "4", "5", "6", "7", "9", "0")) {
        value = "8" + value.slice(1);
      }
    } else {
      value = "";
    }

    // Добавляем тире между цифрами
    if (value.length >= 1) {
      value = value.slice(0, 1) + "-" + value.slice(1);
    }
    if (value.length >= 6) {
      value = value.slice(0, 5) + "-" + value.slice(5);
    }
    if (value.length >= 10) {
      value = value.slice(0, 9) + "-" + value.slice(9);
    }
    if (value.length >= 13) {
      value = value.slice(0, 12) + "-" + value.slice(12);
    }

    setPhone(value);
  };
  return (
    <input
      className="form-control"
      type="tel"
      value={phone}
      onChange={handleChange}
      maxLength={15}
      placeholder="+7(000)000-00-00"
    />
  );
};

export default PhoneNumberInput;
