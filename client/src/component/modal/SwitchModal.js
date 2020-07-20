import React from 'react';

export default function SwitchModal({ disabled: bolean }) {
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
          <input name="group1" type="radio" defaultChecked disabled={bolean} />
          <span
            style={{
              fontWeight: 'bold',
              color: bolean ? '#b2bec3' : '#c0392b',
            }}
          >
            Despesa &nbsp; &nbsp;
          </span>
        </label>
        <label>
          <input name="group1" type="radio" disabled={bolean} />
          <span
            style={{
              fontWeight: 'bold',
              color: bolean ? '#b2bec3' : '#27ae60',
            }}
          >
            Receita
          </span>
        </label>
      </p>
    </form>
  );
}
