import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import {
  HelpBlock,
  PlantImage,
  HelpText,
  HelpOpenModal,
  HelpOpenModalIcon,
  HelpModal,
  HelpModalContent,
} from './NeedHelpStyles';
//import HelpForm from '.........';// Імпортуйте компонент HelpForm з файлу HelpForm

const NeedHelp = () => {
  const [showModal, setShowModal] = useState(false); // Стан для відображення/приховування модального вікна
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal); // Функція для перемикання стану модального вікна
  const dpr = window.devicePixelRatio || 1;

  // const plantImage = dpr > 1 ? plant2x : plant; // ------------  Вибір зображення рослини в залежності від девайсу
  const plantImage = ''; // заглушка для зображення рослини

  return (
    // Блок з інформацією та кнопкою для відкриття модального вікна
    <HelpBlock>
      <PlantImage src={plantImage} alt="Plant as a helper" />
      <HelpText>
        If you need help with <span>TaskPro</span>, check out our support
        resources or reach out to our customer support team.
      </HelpText>

      {/* ------------Кнопка для відкриття модального вікна */}
      <HelpOpenModal onClick={toggleModal}>
        <span>
          {/* ----------Іконка відкриття модального вікна */}
          <HelpOpenModalIcon />
        </span>
        Need help?
      </HelpOpenModal>

      {/* 
      Модальне вікно для форми NeedHelp
      {showModal && (
        <HelpModal>
          <HelpModalContent>
            <HelpForm handleClose={toggleModal} />
            {/* Placeholder for modal content 
          </HelpModalContent>
        </HelpModal>
      )}
      */}
    </HelpBlock>
  );
};

export default NeedHelp;
