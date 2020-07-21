import React, { useState, useEffect } from 'react';
import Spinner from './component/Spinner';
import List from './component/lista/List';
import Selec from './component/lista/Selec';
import { REACT_APP_API_URL } from './http-common.js';
import controller from './controller/controller.js';
import ButtonNext from './component/ButtonNext';
import { backYearMonth, nextYearMonth, filterList } from './helpers/helpers.js';
import validate from './helpers/validateTransaction.js';
import Search from './component/Search';
import WindowModal from './component/modal/WindowModal.js';
import BarStatus from './component/BarStatus';
//Necessario para funcionamento das animações do materialize, realizar a chamada dentro de useEffect

export default function App() {
  const [yearMonth, setYearMonth] = useState('2019-02');
  const [list, setList] = useState(null);
  const [closeModal, setCloseModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(null);
  const [searchList, setSearchList] = useState(list);
  const [searchText, setSearchText] = useState('');
  const [disabledSave, setDisabledSave] = useState({
    description: true,
    category: true,
    value: true,
    date: true,
  });
  const [newTransaction, setNewTransaction] = useState({
    description: null,
    value: null,
    category: null,
    year: null,
    month: null,
    day: null,
    yearMonth: null,
    yearMonthDay: null,
    type: '-',
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${REACT_APP_API_URL}/${yearMonth}`);
      const json = await res.json();
      const newSearchList = filterList(json, searchText);
      setSearchList(newSearchList);
      setList(json);
    };
    fetchData();
  }, [yearMonth, isDeleted, searchText]);

  useEffect(() => {
    /*
      Toda vez que o modal for fechado, o estado é resetado, desativando 
      o botão save na proxima abertura do modal
    */
    setDisabledSave({
      description: true,
      category: true,
      value: true,
      date: true,
    });
  }, [closeModal]);

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

  const handleModalSwitch = (type) => {
    setNewTransaction({ ...newTransaction, type });
  };

  const handleModalDescription = (text) => {
    let bolean = true;
    if (!!text) {
      if (text !== '') {
        setNewTransaction({ ...newTransaction, description: text });
        bolean = false;
      }
    }
    setDisabledSave({ ...disabledSave, description: bolean });
  };
  const handleModalCategory = (text) => {
    let bolean = true;
    if (!!text) {
      if (text !== '') {
        setNewTransaction({ ...newTransaction, category: text });
        bolean = false;
      }
    }
    setDisabledSave({ ...disabledSave, category: bolean });
  };
  const handleModalValue = (value) => {
    let bolean = true;
    if (!!value) {
      if (value >= 0) {
        setNewTransaction({ ...newTransaction, value: +value });
        bolean = false;
      }
    }
    setDisabledSave({ ...disabledSave, value: bolean });
  };
  const handleModalDate = (date) => {
    let bolean = false;
    let objDate = validate.date(date);

    if (!objDate) {
      //Se a data o input for invalida, retorna objDate === undefined e reseta o objeto, para estado inicial;
      bolean = true;
      objDate = {
        year: null,
        month: null,
        day: null,
        yearMonth: null,
        yearMonthDay: null,
      };
    }

    setNewTransaction({ ...newTransaction, ...objDate });
    setDisabledSave({
      ...disabledSave,
      date: bolean /* libera||bloqueia o disabled referente a date */,
    });
  };

  const handleCloseModal = () => {
    setCloseModal(!closeModal);
  };

  const handleModalSave = () => {
    /*
      Quando clica em save, ativa esta função, que chama o newTransaction atual
      e aplica uma funçção de persistencia no banco, é necessario avisar para o React,
      para ele realizar um refresh puxando os novos valores do banco. (avisar via useEffect, ainda não sei qual state monitorar)
      é uma possibilidade criar, um state para este botão, pois ao ser clicado significa que os dados estão validos para envio,
      e é a desculpa perfeita para solicitar o refresh;
    */
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
              handleCloseModal={handleCloseModal}
              resetTextInput={searchText}
              handleModalSwitch={handleModalSwitch}
              handleModalDescription={handleModalDescription}
              handleModalCategory={handleModalCategory}
              handleModalValue={handleModalValue}
              handleModalDate={handleModalDate}
              disabledSave={disabledSave}
              handleModalSave={handleModalSave}
              closeModal={closeModal}
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
