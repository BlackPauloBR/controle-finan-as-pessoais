import React from 'react';

export default function NewTransaction({
  disabledButton,
  handleClickOpenModal,
}) {
  if (disabledButton !== '') {
    //Necessario para desativar NOVO LANÇAMENTO, caso tenha algo digitado no campo Pesquisa;
    disabledButton = 'disabled';
  }

  const handleClick = () => {
    handleClickOpenModal('ButtonNewTransaction');
  };

  return (
    <button
      className={`waves-effect waves-light btn modal-trigger ${disabledButton}`}
      href="#modal1"
      style={{ borderRadius: '5px' }}
      onClick={handleClick}
    >
      <i className="material-icons left">add</i>Novo Lançamento
    </button>
  );
}
