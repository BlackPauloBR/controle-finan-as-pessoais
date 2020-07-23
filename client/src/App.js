import React, { useState, useEffect } from 'react';
import { backYearMonth, nextYearMonth, filterList } from './helpers/helpers.js';
import validate from './helpers/validateTransaction.js';
import Spinner from './component/Spinner';
import List from './component/lista/List';
import Selec from './component/lista/Selec';
import controller from './controller/controller.js';
import ButtonNext from './component/ButtonNext';
import Search from './component/Search';
import WindowModal from './component/modal/WindowModal.js';
import BarStatus from './component/BarStatus';
import NewTransaction from './component/modal/NewTransaction';
import BarLoading from './component/BarLoading.js';
//Necessario para funcionamento das animações do materialize, realizar a chamada dentro de useEffect

export default function App() {
  const [yearMonth, setYearMonth] = useState('2019-02');
  const [list, setList] = useState(null);
  const [closeModal, setCloseModal] = useState(false);
  const [created, setCreated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(null);
  const [searchList, setSearchList] = useState(list);
  const [searchText, setSearchText] = useState('');
  const [currentTheInfo, setCurrentTheInfo] = useState({});
  const [buttonOpenModal, setButtonOpenModal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      const res = await controller.getYearMonth(yearMonth);

      if (res.status === 200) {
        setIsLoading(false);
        const json = res.data;
        const newSearchList = filterList(json, searchText);
        setSearchList(newSearchList);
        setList(json);
      }
    };
    fetchData();
  }, [yearMonth, isDeleted, searchText, created]);

  useEffect(() => {}, [isLoading]);

  useEffect(() => {
    /*
      Toda vez que o modal for fechado ou aberto, o estado é resetado, desativando
      ou habilitando o botão save na proxima abertura do modal
    */
    let bolean = true;
    if (buttonOpenModal === 'ButtonEditTransaction') {
      bolean = false;
    }
    setDisabledSave({
      description: bolean,
      category: bolean,
      value: bolean,
      date: bolean,
    });

    /*
      Toda vez que o modal for aberto, o estado de newTransaction é resetado,
      porque é necessario?
        porque ao abrir o modal por edit, ele manteria os valores anteriorer armazenados,
        e ao usar o função validate.editTransaciton, ela não saberia quais valores foram alterados,
        mas dessa forma, ela analisa, quem é null, e oque conter algum conteudo, foi o valor alterado.
    */
    setNewTransaction({
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
  }, [buttonOpenModal, currentTheInfo]);

  const handleSelect = (value) => {
    setYearMonth(value);
  };

  const handleDelete = async (theInfo) => {
    try {
      setIsLoading(true);
      const res = await controller.deleteTransaction(theInfo);

      if (res.status === 200) {
        setIsLoading(false);
        setIsDeleted({ ...theInfo });
      }
    } catch (err) {
      console.log(`Erro ao deletar Objeto, messagem: `);
      console.log(err);
    }
  };

  const handleEdit = (theInfo) => {
    //função que manuseara a edição da transaction;
    setCurrentTheInfo(theInfo);
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

  const handleModalSave = async () => {
    try {
      if (buttonOpenModal === 'ButtonNewTransaction') {
        // Quando clica em save, ativa esta função, que chama o newTransaction atual
        // já validado, pois o button Save só fica disponivel para clique, se os valores inseridos estiverem corretos.

        //funçção de persistencia no banco
        setIsLoading(true);
        const res = await controller.createTransactions(newTransaction);

        if (res.status === 200) {
          setIsLoading(false);
          //se o objeto foi criado com sucesso com 200 de resposta, ele altera o valor de created, para solicitar um refresh do React;
          setCloseModal(!closeModal);

          //importante para limpar os campos do modal, e deixa desabilitado o button Save na proxima abertura;
          setCreated(!created);
        }
      }

      if (buttonOpenModal === 'ButtonEditTransaction') {
        //Importante para copiar as alteraçoes feita ao editar a transição,
        const newEditTransaction = validate.editTransaction(
          newTransaction,
          currentTheInfo
        );

        //Depois de copiar as alterações, o objeto pode ser persistido no banco.
        setIsLoading(true);
        const res = await controller.editTransactions(newEditTransaction);

        if (res.status === 200) {
          setIsLoading(false);
          //importante para limpar os campos do modal, e deixa desabilitado o button Save na proxima abertura;
          setCloseModal(!closeModal);

          //se o objeto foi editado com sucesso com 200 de resposta, ele altera o valor de created, para solicitar um refresh do React;
          setCreated(!created);
        }
      }
    } catch (err) {
      console.log('Erro em handleModalSave em App.js, messagem: ');
      console.log(err);
    }
  };

  const handleClickOpenModal = (text) => {
    //função que descobri por qual botão foi aberto o WindowModal
    if (text === 'ButtonNewTransaction') {
      //faça algo...
    }
    if (text === 'ButtonEditTransaction') {
      //faça algo...
    }
    setButtonOpenModal(text);
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
          <span>
            {isLoading ? (
              <BarLoading />
            ) : (
              <div style={{ minHeight: '10px', maxHeight: '10px' }}></div>
            )}
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
            <NewTransaction
              disabledButton={searchText}
              handleClickOpenModal={handleClickOpenModal}
            />

            <WindowModal
              buttonOpenModal={buttonOpenModal}
              currentTheInfo={currentTheInfo}
              handleCloseModal={handleCloseModal}
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
            handleClickOpenModal={handleClickOpenModal}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
