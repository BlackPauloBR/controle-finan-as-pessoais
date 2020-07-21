import React from 'react';

export default function SwitchModal({ buttonOpenModal, handleModalSwitch }) {
  const handleInput = (event) => {
    handleModalSwitch(event.target.value);
  };

  //Se o modal for aberto por edit, desabilite o Switch
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
            name="group1"
            type="radio"
            defaultChecked
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
            name="group1"
            type="radio"
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
