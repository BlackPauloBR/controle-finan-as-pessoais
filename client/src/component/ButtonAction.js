import React from 'react';

export default function ButtonAction({ icon, cor, theInfo, handleButton }) {
  const clickedButton = () => {
    handleButton(theInfo);
  };
  return (
    <div>
      <i
        className={`material-icons small z-depth-1 ${cor}`}
        style={{
          color: 'white',
          cursor: 'pointer',
          padding: '9px',
          borderRadius: '50%',
          marginLeft: '15px',
          fontSize: '1.7rem',
        }}
        onClick={clickedButton}
      >
        {icon}
      </i>
    </div>
  );
}
