import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Додали useDispatch
import { logOut } from '../../redux/auth/auth-operations';
// import BoardList from './BoardList/BoardList';
import NeedHelp from './NeedHelp/NeedHelp';
// import Modal from '../Modal/ModalKill';
// import SearchBoardModal from '../Modal/SearchBoardModal/SearchBoardModal';
import BoardModal from '../Modal/BoardModal/BoardModal';
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
// const AddBoardForm = () => {};

// const sprite = 'assets/svg/sprite.svg';
// const plantImage = '';

const Sidebar = ({ showSidebar }) => {
  // const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  const [isAddBoardModalShown, setIsAddBoardModalShown] = useState(false);
  // const [isEditBoardModalShown, setIsEditBoardModalShown] = useState(false);
  // const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  // const [showSearchResult, setShowSearchResult] = useState(false);

  // Отримали функцію dispatch з useDispatch
  const dispatch = useDispatch();

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const { search } = event.target.elements;

  //   dispatch(boardSearch(search.value.trim().toLowerCase()));
  //   setShowSearchResult(true);
  //   setIsSearchModalOpen(false);
  // };
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
          <Button onClick={() => setIsAddBoardModalShown(true)} type="button">
            <PlusIcon>
              <svg>
                <use href={`${sprite}#plus`}></use>
              </svg>
            </PlusIcon>
          </Button>
        </CreateBoardBlock>
      </BoardBlock>

      {/* Виведення списку дошок */}
      <SidebarBoardsList>{/* <BoardList /> */}</SidebarBoardsList>

      {/* Блок з інформацією NeedHelp */}
      <div>
        <NeedHelp />
      </div>

      {/* Кнопка LogOut */}
      <LogoutBlock>
        <LogoutLink>
          <LogoutIcon>
            <svg>
              {/* Використання спрайта */}
              <use href={`${sprite}#log-out`}></use>
            </svg>
          </LogoutIcon>
          <Link to="/" onClick={handleLogOut}>
            <p>Log out</p>
          </Link>
        </LogoutLink>
      </LogoutBlock>

      {/* Модальне вікно для створення нової дошки
      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddBoardForm handleClose={toggleModal} />
        </Modal>
      )} */}
      {isAddBoardModalShown && (
        <BoardModal
          variant="add"
          closeModal={() => setIsAddBoardModalShown(false)}
          //  menu={menu}
          closeMenu={showSidebar}
        />
      )}
      {/* {isEditBoardModalShown && (
        <BoardModal
          variant="edit"
          closeModal={() => setIsEditBoardModalShown(false)}
        />
      )} */}

      {/* {isSearchModalOpen && (
        <SearchBoardModal
          onClose={() => setIsSearchModalOpen(false)}
          handleSubmit={handleSubmit}
        />
      )} */}
    </SidebarWrapper>
  );
};

export default Sidebar;
