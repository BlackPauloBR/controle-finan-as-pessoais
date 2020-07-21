import React from 'react';
import Transaction from './Transaction';

export default function List({
  theList,
  handleDelete,
  handleEdit,
  handleClickOpenModal,
}) {
  const { transactions } = theList;
  return (
    <>
      {transactions.map((item, index) => {
        if (
          !!transactions[index - 1] &&
          transactions[index].day === transactions[index - 1].day
        ) {
          return (
            <Transaction
              key={item._id}
              theInfo={item}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleClickOpenModal={handleClickOpenModal}
            />
          );
        } else {
          return (
            <div key={item._id}>
              <br />
              <Transaction
                theInfo={item}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleClickOpenModal={handleClickOpenModal}
              />
            </div>
          );
        }
      })}
    </>
  );
}
