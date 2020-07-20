import React from 'react';
import { calcBarStatus, formatValue } from '../helpers/helpers.js';
export default function BarStatus({ theList }) {
  const showStatus = calcBarStatus(theList);

  let corSaldo = '#27ae60';
  if (showStatus.saldo < 0) corSaldo = '#c0392b';

  showStatus.totalReceitas = formatValue(showStatus.totalReceitas);
  showStatus.totalDespesas = formatValue(showStatus.totalDespesas);
  showStatus.saldo = formatValue(showStatus.saldo);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #b2bec3',
        borderRadius: '5px',
        marginTop: '25px',
        minWidth: '650px',
        maxWidth: '650px',
        minHeight: '25px',
        padding: '5px',
      }}
    >
      <span>
        <strong>Lançamentos: </strong>
        {showStatus.lengthTransaction}
      </span>
      <span>
        <strong>Receitas: </strong>
        <strong style={{ color: '#27ae60' }}>{showStatus.totalReceitas}</strong>
      </span>
      <span>
        <strong>Despesas: </strong>
        <strong style={{ color: '#c0392b' }}>{showStatus.totalDespesas}</strong>
      </span>
      <span>
        <strong>Saldo: </strong>
        <strong style={{ color: corSaldo }}>{showStatus.saldo}</strong>
      </span>
    </div>
  );
}
