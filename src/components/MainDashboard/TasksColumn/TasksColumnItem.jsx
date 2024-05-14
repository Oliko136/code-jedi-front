import { useState } from 'react';
import sprite from '../../../assets/svg/sprite.svg';
import CardAddModal from 'components/Modal/CardModal/CardAddModal.jsx';
import EditColumnModal from 'components/Modal/ColumnModal/EditColumnModal.jsx';
import DeleteModal from '../../Modal/DeleteModal/DeleteModal.jsx';
import TasksCardList from '../TasksCard/TasksCardList.jsx';
import {
  TitleColumnDiv,
  Button,
  Icons,
  SvgDiv,
  ButtonForCard,
  IconDoCard,
  Column,
} from './TasksColumn.styled.jsx';

const TasksColumnItem = ({ column, onDeleteColumn }) => {
  const [columnTitle, setColumnTitle] = useState(column.title);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [showEditColumnModal, setShowEditColumnModal] = useState(false);
  const [showDeleteModal, setshowDeleteModal] = useState(false);

  const toggleAddCardModal = () =>
    setShowAddCardModal(prevShowModal => !prevShowModal);
  const toggleEditColumnModal = () =>
    setShowEditColumnModal(prevShowModal => !prevShowModal);

  const handleColumnUpdate = newTitle => {
    setColumnTitle(newTitle);
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

            <Button onClick={() => setshowDeleteModal(true)}>
              <Icons>
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

      {showAddCardModal && (
        <CardAddModal columnId={column._id} showModal={setShowAddCardModal} />
      )}
      {showEditColumnModal && (
        <EditColumnModal
          showModal={setShowEditColumnModal}
          columnId={column._id}
          title={columnTitle}
          onColumnUpdate={handleColumnUpdate}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          onClose={() => setshowDeleteModal(false)}
          onConfirm={() => onDeleteColumn(column._id)}
        />
      )}
    </>
  );
};

export default TasksColumnItem;
