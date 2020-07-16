import React, { useState, useEffect } from 'react';
import Spinner from './component/Spinner';
import List from './component/lista/List';
import 'materialize-css';
import Selec from './component/lista/Selec';
export default function App() {
  const [yearMonth, setYearMonth] = useState('2020-10');
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3001/api/transaction/${yearMonth}`
      );
      const json = await res.json();
      setList(json);
    };
    fetchData();
  }, [yearMonth]);

  const handleSelect = (value) => {
    setYearMonth(value);
  };

  return (
    <>
      {list ? (
        <>
          <h1>Controle de Finanças Pessoais</h1>
          <span>
            <h5>
              <strong>Status: API online</strong>
            </h5>
          </span>
          <Selec theYearMonth={handleSelect}></Selec>
          <List theList={list} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
