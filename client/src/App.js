import React, { useState, useEffect } from 'react';
import Spinner from './component/Spinner';
import List from './component/lista/List';
import Selec from './component/lista/Selec';
import { REACT_APP_API_URL } from './http-common.js';
import controller from './controller/controller.js';

export default function App() {
  const [yearMonth, setYearMonth] = useState('2019-01');
  const [list, setList] = useState(null);
  const [isDeleted, setIsDeleted] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${REACT_APP_API_URL}/${yearMonth}`);
      const json = await res.json();
      setList(json);
    };
    fetchData();
  }, [yearMonth, isDeleted]);

  const handleSelect = (value) => {
    setYearMonth(value);
  };

  const handleDelete = async (theInfo) => {
    try {
      const res = await controller.deleteTransaction(theInfo);
      if (res.status === 200) {
        setIsDeleted({ ...theInfo });
      }
    } catch (err) {
      console.log('Erro ao deletar Objeto');
    }
  };

  const handleEdit = (theInfo) => {
    //função que manuseara a edição da transaction;
    console.log('chegando em handleEdit de App.js');
  };

  return (
    <>
      {list ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1>Controle de Finanças Pessoais</h1>
          <span>
            <h5>
              <strong>Status: API online</strong>
            </h5>
          </span>
          <Selec theYearMonth={handleSelect} currentPeriod={yearMonth}></Selec>
          <List
            theList={list}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
