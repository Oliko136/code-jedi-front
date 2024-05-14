import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBoardThunk } from '../../../redux/boards/boards-operations';
import {
  BoardItem,
  BoardItemTitleBlock,
  BoardIcon,
  BoardTitle,
  BoardItemButtonsBlock,
  BoardBtn,
  BoardBtnSvg,
} from './BoardListItem.styled';
import BoardModalEdit from '../../Modal/BoardModal/BoardModalEdit'
import sprite from '../../../assets/svg/sprite.svg';
import DeleteModal from 'components/Modal/DeleteModal/DeleteModal';

const BoardListItem = ({ board, activeBoardId }) => {
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeBoardId === board._id;
  const [isModalShown, setIsModalShown] = useState(false);
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
        {isActive && (
          <BoardItemButtonsBlock>
            <li>
            <BoardBtn onClick={() => setIsModalShown(true)} type="button">
              <BoardBtnSvg isHovered={isHovered || isActive}>
                <svg>
                  <use href={`${sprite}#pencil`}></use>
                </svg>
              </BoardBtnSvg>
              </BoardBtn>
            </li>
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

      {isDeleteModalShown && (
        <DeleteModal
          onClose={() => setIsDeleteModalShown(false)}
          onConfirm={handleDeleteBoard}
        />
      )}
         {isModalShown && (
        <BoardModalEdit
          variant="add"
          closeModal={() => setIsModalShown(false)}
          //  menu={menu}
        
          currentBoard={board}
        />
      )}
    </>
  );
};

export default BoardListItem;
