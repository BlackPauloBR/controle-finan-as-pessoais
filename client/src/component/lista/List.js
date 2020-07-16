import React from 'react';
import Transaction from './Transaction';

export default function List({ theList }) {
  const { transactions } = theList;
  console.log(transactions);
  return (
    <>
      {transactions.map((item, index) => {
        if (
          !!transactions[index - 1] &&
          transactions[index].day === transactions[index - 1].day
        ) {
          return <Transaction key={item._id} theInfo={item} />;
        } else {
          return (
            <div key={item._id}>
              <br />
              <Transaction theInfo={item} />
            </div>
          );
        }
      })}
    </>
  );
}
