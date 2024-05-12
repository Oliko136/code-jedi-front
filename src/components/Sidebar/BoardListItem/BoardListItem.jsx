import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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

const BoardListItem = ({ board, activeBoardId }) => {
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeBoardId === board._id;

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <BoardItem
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        isActive={isActive}
      >
        <BoardItemTitleBlock>
          <BoardIcon isHovered={isHovered || isActive}>
            <svg>
              <use href={`${sprite}#${board.icon}`}></use>
            </svg>
          </BoardIcon>
          <BoardTitle isHovered={isHovered || isActive}>
            {board.title}
          </BoardTitle>
        </BoardItemTitleBlock>

        {/*----------------- Блок з кнопками для редагування та видалення дошки */}
        {isActive && (
          <BoardItemButtonsBlock>
            {/* --------------------- Кнопка для редагування дошки */}
            <li>
              {/* <BoardBtn type="button" onClick={toggleModal}> */}
              <BoardBtnSvg isHovered={isHovered || isActive}>
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
                <BoardBtnSvg isHovered={isHovered || isActive}>
                  <svg>
                    <use href={`${sprite}#trash`}></use>
                  </svg>
                </BoardBtnSvg>
              </BoardBtn>
            </li>
          </BoardItemButtonsBlock>
        )}
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
