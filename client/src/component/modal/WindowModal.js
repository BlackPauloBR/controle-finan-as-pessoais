import React, { useEffect } from 'react';
import SwitchModal from './SwitchModal';
import InputModal from './InputModal';
import validate from '../../helpers/validateTransaction.js';
import M from 'materialize-css';
//Necessario para funcionamento das animações do materialize, realizar a chamada dentro de useEffect

export default function WindowModal({
  currentTheInfo,
  buttonOpenModal,
  handleModalSwitch,
  handleModalDescription,
  handleModalCategory,
  handleModalValue,
  handleModalDate,
  disabledSave,
  handleModalSave,
  handleCloseModal,
  closeModal,
}) {
  useEffect(() => {
    M.AutoInit();
  }, []);

  let bolean = validate.disabled(disabledSave);

  return (
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
            onClick={handleCloseModal}
            style={{ borderRadius: '5px' }}
          >
            <i className="material-icons">close</i>
          </button>
        </div>
        <SwitchModal
          buttonOpenModal={buttonOpenModal}
          handleModalSwitch={handleModalSwitch}
        />
        <InputModal
          handleInputModal={handleModalDescription}
          theInfoValue={currentTheInfo.description}
          buttonOpenModal={buttonOpenModal}
          name="Descrição"
          type="text"
          closeModal={closeModal}
        />
        <InputModal
          handleInputModal={handleModalCategory}
          theInfoValue={currentTheInfo.category}
          buttonOpenModal={buttonOpenModal}
          name="Categoria"
          type="text"
          closeModal={closeModal}
        />
        <InputModal
          handleInputModal={handleModalValue}
          theInfoValue={currentTheInfo.value}
          buttonOpenModal={buttonOpenModal}
          name="Valor"
          type="number"
          closeModal={closeModal}
        />
        <InputModal
          handleInputModal={handleModalDate}
          theInfoValue={currentTheInfo.yearMonthDay}
          buttonOpenModal={buttonOpenModal}
          name="Data"
          type="date"
          closeModal={closeModal}
        />
      </div>
      <div className="modal-footer">
        <button
          className="btn-small modal-close waves-effect waves-green "
          style={{ backgroundColor: 'green', borderRadius: '5px' }}
          onClick={handleModalSave}
          disabled={bolean}
        >
          <i className="material-icons left">save</i>SALVAR
        </button>
      </div>
    </div>
  );
}
