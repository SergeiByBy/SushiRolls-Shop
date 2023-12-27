import React, { useState } from 'react';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value)
    const phoneNumberPattern = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;

    if (value === '' || phoneNumberPattern.test(value)) {
      setPhoneNumber(value);
    }
  };

  return (
    <input
      type="text"
      placeholder="+7(000)000-00-00"
      value={phoneNumber}
      onChange={handleChange}
    />
  );
};

export default PhoneNumberInput;