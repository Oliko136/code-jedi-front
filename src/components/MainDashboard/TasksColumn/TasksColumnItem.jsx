import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  deleteColumnThunk,
  getColumnByIdThunk,
  // updateColumnThunk,
} from '../../../redux/column/column-operations.js';
import sprite from '../../../assets/svg/sprite.svg';
import TasksCard from '../TasksCard/TasksCard.jsx';
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
import { selectCurrentСolumn } from '../../../redux/column/column-selectors.js';

const TasksColumnItem = ({ column }) => {
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [showEditColumnModal, setShowEditColumnModal] = useState(false);
  const { _id: boardId } = useSelector(selectCurrentBoard);
  const columnId = useSelector(selectCurrentСolumn);

  console.log('boardId :>> ', boardId);
  console.log('column :>> ', column);
  // const [title, setTitle] = useState(column.title);
  // console.log('column.title :>> ', column.title);
  // const [showDeleteColumnModal, setShowDeleteColumnModal] = useState(false);
  const dispatch = useDispatch();
  const { _id, title } = column;

  console.log('title :>> ', title);

  useEffect(() => {
    console.log('columnId :>> ', columnId);
    dispatch(getColumnByIdThunk(_id));
  }, [_id, dispatch]);

  const toggleAddCardModal = () =>
    setShowAddCardModal(prevShowModal => !prevShowModal);
  const toggleEditColumnModal = () =>
    setShowEditColumnModal(prevShowModal => !prevShowModal);

  // const handleColumnUpdate = newTitle => {
  //   setTitle(newTitle);
  // };

  const onDeleteColumn = () => {
    dispatch(deleteColumnThunk(_id));
  };

  return (
    <>
      <Column id={_id}>
        <TitleColumnDiv>
          <h3>{title}</h3>
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

        <TasksCard />

        <ButtonForCard onClick={toggleAddCardModal}>
          <IconDoCard>
            <use href={`${sprite}#plus`}></use>
          </IconDoCard>
          Add another card
        </ButtonForCard>
      </Column>
      {showAddCardModal && <CardAddModal showModal={setShowAddCardModal} />}
      {showEditColumnModal && (
        <EditColumnModal
          showModal={setShowEditColumnModal}
          columnId={_id}
          title={title}
          // onColumnUpdate={handleColumnUpdate}
        />
      )}
    </>
  );
};

export default TasksColumnItem;
