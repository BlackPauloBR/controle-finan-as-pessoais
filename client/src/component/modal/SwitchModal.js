import React from 'react';

export default function SwitchModal({
  buttonOpenModal,
  theInfoValue,
  handleModalSwitch,
}) {
  const handleInput = (event) => {
    handleModalSwitch(event.target.value);
  };

  //Se o modal for aberto por edit, desabilite o Switch
  let disabledSwitch = false;

  //Se o modal for aberto por (Novo Lançamento/Edit), esse é o padrão.
  let defaultLess = true;
  let defaultMore = false;

  if (buttonOpenModal === 'ButtonEditTransaction') {
    disabledSwitch = true;

    //Se o modal for aberto por edit, ele verifica se precisa alterar o valor default
    //caso necessecite,  os valores padrões são invertidos.
    if (theInfoValue === '+') {
      defaultLess = false;
      defaultMore = true;
    }
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
            checked={defaultLess}
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
            checked={defaultMore}
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
