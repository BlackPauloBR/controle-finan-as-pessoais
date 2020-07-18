import React from 'react';

export default function ButtonNext({ currentPeriod, handleButton, icon }) {
  let typeButton = '2021-12';
  if (icon === 'arrow_back') typeButton = '2019-01';

  const clickedButton = () => {
    handleButton();
  };
  if (currentPeriod === typeButton) {
    return (
      <div
        className="btn-floating btn-small waves-effect waves-light blue disabled"
        style={{
          marginLeft: '10px',
          marginRight: '10px',
          justifyContent: 'center',
          alignContent: 'center',
        }}
        onClick={clickedButton}
      >
        <i className="material-icons">{icon}</i>
      </div>
    );
  } else {
    return (
      <div
        className="btn-floating btn-small waves-effect waves-light blue"
        style={{
          marginLeft: '10px',
          marginRight: '10px',
          justifyContent: 'center',
          alignContent: 'center',
        }}
        onClick={clickedButton}
      >
        <i className="material-icons">{icon}</i>
      </div>
    );
  }
}
