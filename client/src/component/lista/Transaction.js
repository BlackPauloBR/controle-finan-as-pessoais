import React from 'react';
import { formatValue, formatDay } from '../../helpers/helpers.js';
import ButtonAction from '../ButtonAction.js';
export default function Transaction({ theInfo, handleDelete, handleEdit }) {
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
          backgroundColor: corType,
          color: 'white',
          maxWidth: '650px',
          minWidth: '650px',
          maxHeight: '90px',
          minHeight: '90px',
          marginBottom: '5px',
        }}
      >
        <h2 style={{ padding: '5px', minWidth: '60px', maxWidth: '60px' }}>
          {showDay}
        </h2>
        <div
          style={{
            color: 'white',
            fontSize: '1.2rem',
            padding: '5px',
            minWidth: '350px',
            maxWidth: '350px',
            alignContent: 'center',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>{theInfo.category}</span>
          <br />
          <span>{theInfo.description}</span>
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'row', minWidth: '140px' }}
        >
          <ButtonAction
            icon="delete"
            theInfo={theInfo}
            handleButton={handleDelete}
          />
          <ButtonAction
            icon="edit"
            theInfo={theInfo}
            handleButton={handleEdit}
          />

          <span
            style={{ margin: '8px', marginLeft: '15px', fontSize: '1.1rem' }}
          >
            {showValue}
          </span>
        </div>
      </div>
    </>
  );
}
