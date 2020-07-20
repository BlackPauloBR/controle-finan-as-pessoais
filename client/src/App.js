import React, { useState, useEffect } from 'react';
import Spinner from './component/Spinner';
import List from './component/lista/List';
import Selec from './component/lista/Selec';
import { REACT_APP_API_URL } from './http-common.js';
import controller from './controller/controller.js';
import ButtonNext from './component/ButtonNext';
import { backYearMonth, nextYearMonth, filterList } from './helpers/helpers.js';
import Search from './component/Search';
import WindowModal from './component/modal/WindowModal.js';
import BarStatus from './component/BarStatus';
//Necessario para funcionamento das animações do materialize, realizar a chamada dentro de useEffect
import M from 'materialize-css';

export default function App() {
  const [yearMonth, setYearMonth] = useState('2019-02');
  const [list, setList] = useState(null);
  const [isDeleted, setIsDeleted] = useState(null);
  const [searchList, setSearchList] = useState(list);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    M.AutoInit();
    const fetchData = async () => {
      const res = await fetch(`${REACT_APP_API_URL}/${yearMonth}`);
      const json = await res.json();
      const newSearchList = filterList(json, searchText);
      setSearchList(newSearchList);
      setList(json);
    };
    fetchData();
  }, [yearMonth, isDeleted, searchText]);

  const handleSelect = (value) => {
    setYearMonth(value);
  };
  useEffect(() => {}, [list]);

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

    setYearMonth(newYearMonth);
  };

  const handleButtonNext = () => {
    //função que set yearMonth anterior.
    const newYearMonth = nextYearMonth(yearMonth);
    setYearMonth(newYearMonth);
  };

  const handleSearchInput = (textInput) => {
    setSearchText(textInput);
  };

  const handleModalDescription = (text) => {
    console.log(text);
  };
  const handleModalCategory = (text) => {
    console.log(text);
  };
  const handleModalValue = (value) => {
    console.log(value);
  };
  const handleModalDate = (date) => {
    console.log(date);
  };

  return (
    <>
      {list ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          <h2>Controle de Finanças Pessoais</h2>
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
          <BarStatus theList={searchList} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <WindowModal
              resetTextInput={searchText}
              handleModalDescription={handleModalDescription}
              handleModalCategory={handleModalCategory}
              handleModalValue={handleModalValue}
              handleModalDate={handleModalDate}
            />
            <Search theList={list} handleSearchInput={handleSearchInput} />
          </div>
          <List
            theList={searchList}
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
