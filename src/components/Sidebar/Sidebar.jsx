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
  LogoutLink,
  SidebarBoardsList,
  LogoutBlock,
  LogoutIcon,
  BoardBlock,
  CreateBoardBlock,
  CreateBoardText,
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
      <BoardBlock>
        <h2>My boards</h2>
        <CreateBoardBlock>
          <CreateBoardText>Create a new board</CreateBoardText>
          <Button onClick={toggleModal} type="button">
            <PlusIcon>
              <svg>
                <use href={`${sprite}#plus-icon`}></use>
              </svg>
            </PlusIcon>
          </Button>
        </CreateBoardBlock>
      </BoardBlock>

      {/* Виведення списку дошок */}
      <SidebarBoardsList>
        <BoardList />
      </SidebarBoardsList>

      {/* Блок з інформацією NeedHelp */}
      <div>
        <NeedHelp />
      </div>

      {/* Кнопка LogOut */}
      <LogoutBlock>
        <LogoutLink>
          <Link to="/" onClick={handleLogOut}>
            <LogoutIcon>
              <svg>
                {/* Використання спрайта */}
                <use href={`${sprite}#log-out`}></use>
              </svg>
            </LogoutIcon>
            <p>Log out</p>
          </Link>
        </LogoutLink>
      </LogoutBlock>

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
