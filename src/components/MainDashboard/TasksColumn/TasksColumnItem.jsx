import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  // deleteColumnThunk,
  getColumnByIdThunk,
} from '../../../redux/column/column-operations.js';
import sprite from '../../../assets/svg/sprite.svg';
import {
  TitleColumnDiv,
  Button,
  Icons,
  SvgDiv,
  ButtonForCard,
  IconDoCard,
  Column,
} from './TasksColumn.styled.jsx';

import CardAddModal from 'components/Modal/CardModal/CardAddModal.jsx';
import EditColumnModal from 'components/Modal/ColumnModal/EditColumnModal.jsx';
import { selectCurrentBoard } from '../../../redux/boards/boards-selectors.js';
import TasksCardList from '../TasksCard/TasksCardList.jsx';

const TasksColumnItem = ({ column }) => {
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [showEditColumnModal, setShowEditColumnModal] = useState(false);
  const [columnTitle, setColumnTitle] = useState(column.title);
  const { _id: boardId } = useSelector(selectCurrentBoard);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColumnByIdThunk({ boardId: boardId, id: column._id }));
    setColumnTitle(column.title);
  }, [dispatch, column._id, column.title, boardId]);

  const toggleAddCardModal = () =>
    setShowAddCardModal(prevShowModal => !prevShowModal);
  const toggleEditColumnModal = () =>
    setShowEditColumnModal(prevShowModal => !prevShowModal);

  const handleColumnUpdate = newTitle => {
    setColumnTitle(newTitle);
  };

  const onDeleteColumn = () => {
    // dispatch(deleteColumnThunk(_id));
  };

  return (
    <>
      <Column id={column._id}>
        <TitleColumnDiv>
          <h3>{columnTitle}</h3>
          <SvgDiv>
            <Button onClick={toggleEditColumnModal}>
              <Icons>
                <use href={`${sprite}#pencil`}></use>
              </Icons>
            </Button>

            <Button>
              <Icons onClick={onDeleteColumn}>
                <use href={`${sprite}#trash`}></use>
              </Icons>
            </Button>
          </SvgDiv>
        </TitleColumnDiv>

        <TasksCardList columnId={column._id} />

        <ButtonForCard onClick={toggleAddCardModal}>
          <IconDoCard>
            <use href={`${sprite}#plus`}></use>
          </IconDoCard>
          Add another card
        </ButtonForCard>
      </Column>
      
      {showAddCardModal && <CardAddModal columnId={column._id} showModal={setShowAddCardModal} />}
      {showEditColumnModal && (
        <EditColumnModal
          showModal={setShowEditColumnModal}
          columnId={column._id}
          title={columnTitle}
          onColumnUpdate={handleColumnUpdate}
        />
      )}
    </>
  );
};

export default TasksColumnItem;
