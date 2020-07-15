import React from 'react';
import Transaction from './Transaction';

export default function List({ theList }) {
  const { transactions } = theList;
  console.log(transactions);
  return (
    <ul>
      {transactions.map((item) => {
        return <Transaction key={item._id} theInfo={item} />;
      })}
    </ul>
  );
}
