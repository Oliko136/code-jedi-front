import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Додали useDispatch
import { logOut } from '../../redux/auth/auth-operations';
import BoardList from './BoardList/BoardList';
import NeedHelp from './NeedHelp/NeedHelp';
import Modal from '../Modal/Modal';
import {
  SidebarWrapper,
  SidebarHeader,
  LogoBlock,
  //SidebarBoardsList,
  //LogoutBlock,
  //LogoutLink,
  //LogoutIcon,
  //CreateBoardBlock,
  //CreateBoardText,
  Button,
  PlusIcon,
} from './Sidebar.styled';
import sprite from '../../assets/svg/sprite.svg';


// Додали оголошення AddBoardForm
const AddBoardForm = () => {};

// const sprite = 'assets/svg/sprite.svg';
// const plantImage = '';

const Sidebar = ({ showSidebar }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  // Отримали функцію dispatch з useDispatch
  const dispatch = useDispatch();

  // Викликаємо функцію dispatch(logOut()) для виходу користувача
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <SidebarWrapper className={showSidebar ? 'showSidebar' : ''}>
      {/* Логотип та назва додатку */}
      <SidebarHeader>
        <LogoBlock to="/home">
          <div>
            {/* Використання спрайта */}
            <svg>
              <use href={`${sprite}#logo`}></use>
            </svg>
          </div>
          <p>Task Pro</p>
        </LogoBlock>
      </SidebarHeader>

      {/* Блок для створення нової дошки */}
      <div>
        <h2>My boards</h2>
        <div>
          <h3>Create a new board</h3>
          <Button>
            {' '}
            <button onClick={toggleModal} type="button">
              <PlusIcon>
                <svg>
                  {/* Використання спрайта */}
                  <use href={`${sprite}#plus`}></use>
                </svg>
              </PlusIcon>
            </button>
          </Button>
        </div>
      </div>

      {/* Виведення списку дошок */}
      <div>
        <BoardList />
      </div>

      {/* Блок з інформацією NeedHelp */}
      <div>
        <NeedHelp />
      </div>

      {/* Кнопка LogOut */}
      <div>
        <Link to="/" onClick={handleLogOut}>
          <span>
            <svg>
              {/* Використання спрайта */}
              <use href={`${sprite}#log-out`}></use>
            </svg>
          </span>
          <p>Log out</p>
        </Link>
      </div>

      {/* Модальне вікно для створення нової дошки */}
      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddBoardForm handleClose={toggleModal} />
        </Modal>
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;
