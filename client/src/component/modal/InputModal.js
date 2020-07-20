import React, { useState, useEffect } from 'react';

export default function InputModal({ handleInputModal, name, type, isOpen }) {
  const [resetValue, setResetValue] = useState('');

  useEffect(() => {
    setResetValue('');
  }, [isOpen]);

  const handleInput = (event) => {
    setResetValue(event.target.value);
    handleInputModal(event.target.value);
  };

  return (
    <label>
      {name}
      <input type={type} onChange={handleInput} value={resetValue} min="0" />
    </label>
  );
}
