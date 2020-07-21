import React from 'react';

export default function ButtonAction({
  icon,
  cor,
  theInfo,
  handleButton,
  handleClickOpenModal,
}) {
  const clickedButton = () => {
    handleButton(theInfo);
    if (!!handleClickOpenModal) {
      handleClickOpenModal('ButtonEditTransaction');
    }
  };

  let linkModal = '';
  let classModal = '';
  if (icon === 'edit') {
    linkModal = '#modal1';
    classModal = 'modal-trigger';
  }

  return (
    <div>
      <i
        className={`${classModal} material-icons small z-depth-1 ${cor}`}
        href={linkModal}
        style={{
          color: 'white',
          cursor: 'pointer',
          padding: '9px',
          borderRadius: '50%',
          marginLeft: '15px',
          fontSize: '1.7rem',
        }}
        onClick={clickedButton}
      >
        {icon}
      </i>
    </div>
  );
}
