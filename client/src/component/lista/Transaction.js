import React from 'react';
import { formatValue, formatDay } from '../../helpers/helpers.js';
export default function Transaction({ theInfo }) {
  const showValue = formatValue(theInfo.value);
  const showDay = formatDay(theInfo.day);
  let corType = '#c0392b';
  if (theInfo.type === '+') corType = '#27ae60';
  return (
    <>
      <div
        className="z-depth-2"
        id="scale-demo"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyItems: 'left',
          padding: '5px',
          backgroundColor: corType,
          color: 'white',
          maxWidth: '600px',
          maxHeight: '90px',
          marginLeft: '10px',
          marginRight: '10px',
          marginBottom: '5px',
        }}
      >
        <h2 style={{ padding: '5px' }}>{showDay}</h2>
        <div
          style={{
            color: 'white',
            fontSize: '1.2rem',
            padding: '5px',
            maxWidth: '300px',
            minWidth: '300px',
            alignContent: 'center',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>{theInfo.category}</span>
          <br />
          <span>{theInfo.description}</span>
        </div>
        <div>
          <span style={{ fontSize: '1.1rem' }}>{showValue}</span>
        </div>
      </div>
    </>
  );
}
