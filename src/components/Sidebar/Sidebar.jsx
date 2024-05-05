import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Sidebar.module.css';

import { logOut } from '../../redux/auth/auth-operations'; // Імпорт функції logOut для виходу користувача з системи з Redux store
import BoardList from './BoardList/BoardList';
import NeedHelp from './NeedHelp/NeedHelp';
import Modal from '../Modal/Modal';
//import AddBoardForm from '../AddBoardForm'; // Імпорт форми для створення нової дошки
//import sprite from '........'; // Імпорт спрайту для використання векторних іконок

const AddBoardForm = () => {}; // Компонент-заглушка для AddBoardForm

// Заглушки для зображення та спрайту
const sprite = '';
const plantImage = '';

const Sidebar = ({ showSidebar }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const handleLogOut = () => {
    logOut();
  }; // заглушка

  return (
    <aside className={`${css.sidebar} ${showSidebar ? css.showSidebar : ''}`}>
      {/* Логотип та назва додатку */}
      <div className={css.sidebarHeader}>
        <Link to="/home" className={css.logoBlock}>
          <div className={css.logoIcon}>
            <svg className={css.logoFlashIcon}>
              {/* <use href={`${sprite}#....`}></use> */}
            </svg>
          </div>
          <p className={css.logo}>Task Pro</p>
        </Link>
      </div>

      <div className={css.sidebarWrapper}>
        {/* Блок для створення нової дошки */}
        <h2 className={css.sidebarBoardsHeading}>My boards</h2>
        <div className={css.createBoardBlock}>
          <h3 className={css.createBoardText}>Create a new board</h3>
          <button className={css.button} onClick={toggleModal} type="button">
            <svg className={css.plusIcon}>
              {/* <use href={`${sprite}#.....`}></use> */}
            </svg>
          </button>
        </div>
      </div>

      <div className={css.sidebarBoardsList}>
        {/* Виведення списку дошок */}
        <BoardList />
      </div>

      <div className={css.sidebarWrapper}>
        {/* Блок з інформацією NeedHelp */}
        <NeedHelp />
      </div>

      <div className={css.logoutBlock}>
        {/* Кнопка LogOut */}
        <Link to="/" className={css.logoutLink} onClick={handleLogOut}>
          <span>
            <svg className={css.logoutIcon}>
              {/* <use href={`${sprite}#.....`}></use> */}
            </svg>
          </span>
          <p className={css.logoutText}>Log out</p>
        </Link>
      </div>

      {/* Модальне вікно для створення нової дошки */}
      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddBoardForm handleClose={toggleModal} />
        </Modal>
      )}
    </aside>
  );
};

export default Sidebar;
