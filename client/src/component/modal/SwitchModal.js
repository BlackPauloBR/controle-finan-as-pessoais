import React, { useState, useEffect } from 'react';

export default function SwitchModal({
  buttonOpenModal,
  theInfoValue,
  handleModalSwitch,
}) {
  const [isDefault, setIsDefault] = useState(true);

  useEffect(() => {
    if (buttonOpenModal === 'ButtonEditTransaction') {
      if (theInfoValue === '+') {
        setIsDefault(false);
      } else {
        setIsDefault(true);
      }
    }
    if (buttonOpenModal === 'ButtonNewTransaction') {
      setIsDefault(true);
    }
  }, [theInfoValue, buttonOpenModal]);

  const handleInput = (event) => {
    //Necessario pois handle só envia o clique, se for para Lançar uma transação nova.
    if (buttonOpenModal === 'ButtonNewTransaction') {
      if (event.target.value === '+') {
        setIsDefault(false);
      } else {
        setIsDefault(true);
      }
      handleModalSwitch(event.target.value);
    }
  };

  let disabledSwitch = false;
  if (buttonOpenModal === 'ButtonEditTransaction') {
    disabledSwitch = true;
  }

  return (
    <form
      action="#"
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-around',
        minWidth: '250px',
      }}
    >
      <p>
        <label>
          <input
            className="with-gap"
            name="group1"
            type="radio"
            checked={isDefault}
            disabled={disabledSwitch}
            onChange={handleInput}
            value="-"
          />
          <span
            style={{
              fontWeight: 'bold',
              color: disabledSwitch ? '#b2bec3' : '#c0392b',
            }}
          >
            Despesa &nbsp; &nbsp;
          </span>
        </label>
        <label>
          <input
            className="with-gap"
            name="group1"
            type="radio"
            checked={!isDefault}
            disabled={disabledSwitch}
            onChange={handleInput}
            value="+"
          />
          <span
            style={{
              fontWeight: 'bold',
              color: disabledSwitch ? '#b2bec3' : '#27ae60',
            }}
          >
            Receita
          </span>
        </label>
      </p>
    </form>
  );
}
