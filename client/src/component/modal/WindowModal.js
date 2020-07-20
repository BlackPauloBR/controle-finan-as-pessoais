import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import SwitchModal from './SwitchModal';
import InputModal from './InputModal';

export default function WindowModal({
  resetTextInput,
  handleModalDescription,
  handleModalCategory,
  handleModalValue,
  handleModalDate,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [disabledSave, setdisabledSave] = useState(true); //falta implementar em App.js a chegada e o envio do estado.

  if (resetTextInput !== '') {
    //Necessario para resetar valores do input, ao reabrir modal.
    resetTextInput = 'disabled';
  }

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleIsOpen = () => {
    /*Os inputs estão monitorando a variavel isOpen, para saber a 
    hora de resetar os valores*/
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={`waves-effect waves-light btn modal-trigger ${resetTextInput}`}
        href="#modal1"
      >
        <i className="material-icons left">add</i>Novo Lançamento
      </button>

      <div
        id="modal1"
        className="modal"
        style={{
          minHeight: '500px',
          maxWidth: '400px',
          border: '5px solid grey',
          borderRadius: '15px',
        }}
      >
        <div className="modal-content">
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <button
              className="btn-small waves-effect waves-light modal-close red"
              onClick={handleIsOpen}
              style={{
                display: 'flex',
                maxWidth: '15px',
                justifyContent: 'center',
              }}
            >
              <i className="material-icons">close</i>
            </button>
          </div>
          <SwitchModal disabled={false} />
          <InputModal
            handleInputModal={handleModalDescription}
            name="Descrição"
            type="text"
            isOpen={isOpen}
          />
          <InputModal
            handleInputModal={handleModalCategory}
            name="Categoria"
            type="text"
            isOpen={isOpen}
          />
          <InputModal
            handleInputModal={handleModalValue}
            name="Valor"
            type="number"
            isOpen={isOpen}
          />
          <InputModal
            handleInputModal={handleModalDate}
            name="Data"
            type="date"
            isOpen={isOpen}
          />
        </div>
        <div className="modal-footer">
          <button
            className="btn-small modal-close waves-effect waves-green "
            style={{ backgroundColor: 'green', borderRadius: '5px' }}
            disabled={disabledSave}
          >
            <i className="material-icons left">save</i>SALVAR
          </button>
        </div>
      </div>
    </div>
  );
}
