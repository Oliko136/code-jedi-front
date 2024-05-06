import React, { useState } from 'react';
// import HelpForm from 'components/Forms/BoardForms/HelpForm/HelpForm';
// import Modal from 'components/Modal/Modal';
// import plant from '.....';
// import plant2x from '......';
// import sprite from '.......';
import NeedHelpModal from '../../Modal/NeedHelpModal/NeedHelpModal';
import helpcircle_img from './helpcircle.svg';

import css from './NeedHelp.module.css';

const NeedHelp = () => {
  const [showModal, setShowModal] = useState(false); // Стан для відображення/приховування модального вікна
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal); // Функція для перемикання стану модального вікна
  //const dpr = window.devicePixelRatio || 1;

  // const plantImage = dpr > 1 ? plant2x : plant; ------------  Вибір зображення рослини в залежності від девайсу
  const plantImage = ''; // заглушка для зображення рослини

  return (
    // Блок з інформацією та кнопкою для відкриття модального вікна
    <div className={css.helpBlock}>
      <img src={plantImage} alt="Plant as a helper" className={css.plant} />
      <p className={css.helpText}>
        If you need help with <span>TaskPro</span>, check out our support
        resources or reach out to our customer support team.
      </p>

      {/* ------------Кнопка для відкриття модального вікна */}
      <button className={css.helpButton} type="button" onClick={toggleModal}>
        <img src={helpcircle_img} alt="question mark" />
        <p>Need help?</p>
      </button>

      {/* Модальне вікно для форми NeedHelp */}
      {showModal && (
        <div className={css.modal}>
          {showModal && <NeedHelpModal showModal={setShowModal} />}
          {/* <Modal closeModal={toggleModal} style={css.helpModal}> */}
          {/* <HelpForm handleClose={toggleModal} /> */}
          {/* Placeholder for modal content */}
          {/* </Modal> */}
        </div>
      )}
    </div>
  );
};

export default NeedHelp;

// <span>
//         {/* ----------Іконка відкриття модального вікна */}
//         <svg className={css.helpOpenModalIcon}>
//           {/* <use href={`${sprite}#....`}></use> */}
//         </svg>
//       </span>
// Need help ?
