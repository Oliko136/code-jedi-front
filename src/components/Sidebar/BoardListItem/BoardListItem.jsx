import React, { useState } from 'react';
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

const BoardListItem = ({ board, activeBoardId, onDelete }) => {
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeBoardId === board._id;

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
              {/* <BoardBtn type="button" onClick={toggleModal}> */}
              <BoardBtnSvg isHovered={isHovered || isActive}>
                <svg>
                  <use href={`${sprite}#pencil`}></use>
                </svg>
              </BoardBtnSvg>
              {/* </BoardBtn> */}
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
          onConfirm={()=> onDelete(board._id)}
        />
      )}
    </>
  );
};

export default BoardListItem;
