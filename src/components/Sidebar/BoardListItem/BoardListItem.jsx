import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//import { redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import Modal from 'components/Modal/ModalKill';
// import EditBoardForm from './EditBoardForm'; // Виправте шлях

import { deleteBoardThunk } from '../../../redux/boards/boards-operations';
//import { selectOneBoard } from '../../../redux/boards/boards-selectors'; //----------------- Імпорт селектора selectBoard для отримання даних про дошку з Redux
import {
  BoardItem,
  BoardItemTitleBlock,
  BoardIcon,
  BoardTitle,
  BoardItemButtonsBlock,
  BoardBtn,
  BoardBtnSvg,
} from './BoardListItem.styled';
import sprite from '../../../assets/svg/sprite.svg';
import DeleteModal from 'components/Modal/DeleteModal/DeleteModal';

// Заглушка для EditBoardForm
const BoardListItem = ({ board } ) => {
  //const location = useLocation();
  // const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const currentBoard = useSelector(selectOneBoard);
  const handleDeleteBoard = () => {
    const boardId = board._id;
    dispatch(deleteBoardThunk(boardId)).then(action => {
      if (action.type !== 'boards/deleteBoard/fulfilled') {
        return;
      }
      navigate('/');
    });
  };

  return (
    <>
      {/* ------------Посилання на сторінку дошки з назвою та іконкою */}
      {/*<StyledNavLink
        to={`/home/${board.title}`}
        state={{ from: location }}
        className="boardItem"
      >
      </StyledNavLink>
      */}
      <BoardItem>
        <BoardItemTitleBlock>
          <BoardIcon>
            <svg>
              <use href={`${sprite}#${board.icon}`}></use>
            </svg>
          </BoardIcon>
          <BoardTitle>{board.title}</BoardTitle>
        </BoardItemTitleBlock>

        {/*----------------- Блок з кнопками для редагування та видалення дошки */}
        <div>
          <BoardItemButtonsBlock>
            {/* --------------------- Кнопка для редагування дошки */}
            <li>
              {/* <BoardBtn type="button" onClick={toggleModal}> */}
              <BoardBtnSvg>
                <svg>
                  <use href={`${sprite}#pencil`}></use>
                </svg>
              </BoardBtnSvg>
              {/* </BoardBtn> */}
            </li>

            {/* ----------------------- Кнопка для видалення дошки */}
            <li>
              <BoardBtn
                type="button"
                onClick={() => setIsDeleteModalShown(true)}
              >
                <BoardBtnSvg>
                  <svg>
                    <use href={`${sprite}#trash`}></use>
                  </svg>
                </BoardBtnSvg>
              </BoardBtn>
            </li>
          </BoardItemButtonsBlock>
        </div>
      </BoardItem>

      {/* ----------------Модальне вікно для редагування дошки */}
      {/* {showModal && (
        <Modal closeModal={toggleModal}>
           <EditBoardForm
            boardId={board._id}
            initialTitle={board.title}
            initialIconName={board.icon}
            initialBackgroundName={board.background}
            handleClose={toggleModal}
          /> 
          
        </Modal>
      )} */}
      {isDeleteModalShown && (
        <DeleteModal
          onClose={() => setIsDeleteModalShown(false)}
          onConfirm={handleDeleteBoard}
        />
        )}
    </>
  );
};

export default BoardListItem;
