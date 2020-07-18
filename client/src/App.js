import React, { useState, useEffect } from 'react';
import Spinner from './component/Spinner';
import List from './component/lista/List';
import Selec from './component/lista/Selec';
import { REACT_APP_API_URL } from './http-common.js';
import controller from './controller/controller.js';
import ButtonNext from './component/ButtonNext';
import { backYearMonth, nextYearMonth } from './helpers/helpers.js';

export default function App() {
  const [yearMonth, setYearMonth] = useState('2019-02');
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

  const handleButtonBack = () => {
    //função que set yearMonth anterior.
    const newYearMonth = backYearMonth(yearMonth);
    console.log(newYearMonth);
    setYearMonth(newYearMonth);
    console.log('changando em ButtonBack de App.js');
  };

  const handleButtonNext = () => {
    //função que set yearMonth anterior.
    const newYearMonth = nextYearMonth(yearMonth);
    console.log(newYearMonth);
    setYearMonth(newYearMonth);
    console.log('changando em ButtonNext de App.js');
  };

  return (
    <>
      {list ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            justifyItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1>Controle de Finanças Pessoais</h1>
          <span>
            <h5>
              <strong>Status: API online</strong>
            </h5>
          </span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <ButtonNext
              currentPeriod={yearMonth}
              handleButton={handleButtonBack}
              icon="arrow_back"
            />
            <Selec
              theYearMonth={handleSelect}
              currentPeriod={yearMonth}
            ></Selec>
            <ButtonNext
              currentPeriod={yearMonth}
              handleButton={handleButtonNext}
              icon="arrow_forward"
            />
          </div>
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
