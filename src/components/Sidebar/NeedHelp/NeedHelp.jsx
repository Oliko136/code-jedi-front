import React, { useState } from 'react';
//import Modal from 'components/Modal/Modal';
import {
  HelpBlock,
  PlantImage,
  HelpText,
  HelpOpenModal,
  HelpOpenModalIcon,
  HelpModal,
  HelpModalContent,
} from './NeedHelp.styled';
import NeedHelpModal from 'components/Modal/NeedHelpModal/NeedHelpModal'; // Імпортуйте компонент HelpForm з файлу HelpForm
// import plantImage from '../../../assets/img/png/flower1x.png';
import sprite from '../../../assets/svg/sprite.svg';
import plant1x from "../../../assets/img/png/flower1x.png"
import plant2x from "../../../assets/img/png/flower2x.png"

const NeedHelp = () => {
  const [showModal, setShowModal] = useState(false); // Стан для відображення/приховування модального вікна
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal); // Функція для перемикання стану модального вікна
  const dpr = window.devicePixelRatio || 1;

  const plantImage = dpr > 1 ? plant2x : plant1x; // ------------  Вибір зображення рослини в залежності від девайсу
  // const plantImage = '../../../assets/img/png/flower1x.png'; // заглушка для зображення рослини

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
          <svg>
            {/* Використання спрайта */}
            <use href={`${sprite}#help_circle`}></use>
          </svg>
          {/* ----------Іконка відкриття модального вікна */}
          <HelpOpenModalIcon />
        </span>
        Need help?
      </HelpOpenModal>

      {showModal && (
        <HelpModal>
          <HelpModalContent>
            <NeedHelpModal showModal={setShowModal} />
          </HelpModalContent>
        </HelpModal>
      )}
    </HelpBlock>
  );
};

export default NeedHelp;
