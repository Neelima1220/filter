import * as React from 'react';

export interface proip {
  showModal?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<proip> = ({ showModal, setShowModal }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => {
        setShowModal(false);
      }}
    >
      <div
        style={{
          height: '50%',
          width: '50%',
          backgroundColor: 'red',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>I'm modal</h1>
        <p> Here comes the description</p>
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          close{' '}
        </button>
      </div>
    </div>
  );
};

export default Modal;
