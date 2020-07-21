import React from 'react';
import WindowModal from './WindowModal';

export default function NewTransaction() {
  return (
    <div>
      <button
        className={`waves-effect waves-light btn modal-trigger ${resetTextInput}`}
        href="#modal1"
        style={{ borderRadius: '5px' }}
      >
        <i className="material-icons left">add</i>Novo Lançamento
      </button>
      <WindowModal />
    </div>
  );
}
