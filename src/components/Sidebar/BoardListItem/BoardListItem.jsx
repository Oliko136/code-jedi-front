import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from '../../../assets/svg/sprite.svg';
import { deleteBoardThunk } from '../../../redux/boards/boards-operations';
import {
  BoardItem,
  BoardIcon,
  BoardItemButtonsBlock,
  BoardBtn,
  BoardBtnSvg,
  ActiveTitleBlock,
  BoardTitle,
} from './BoardListItem.styled';
import DeleteModal from 'components/Modal/DeleteModal/DeleteModal';

const BoardListItem = ({ board, selectedIcon, isActive, setIsActive }) => {
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteBoard = () => {
    const boardId = board._id;
    dispatch(deleteBoardThunk(boardId)).then(action => {
      if (action.type !== 'boards/deleteBoard/fulfilled') {
        return;
      }
    });
  };

  return (
    <>
      <BoardItem>
        <ActiveTitleBlock>
          <BoardIcon>
            <svg>
              <use href={`${sprite}#${selectedIcon}`}></use>
            </svg>
          </BoardIcon>
          <BoardTitle isActive={isActive}>{board.title}</BoardTitle>
        </ActiveTitleBlock>

        {isActive && (
          <div>
            <BoardItemButtonsBlock>
              <li>
                <BoardBtnSvg>
                  <svg>
                    <use href={`${sprite}#pencil`}></use>
                  </svg>
                </BoardBtnSvg>
              </li>
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
        )}
      </BoardItem>

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
