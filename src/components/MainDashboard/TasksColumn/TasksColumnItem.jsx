import { useDispatch } from 'react-redux';
import {
  deleteColumnThunk,
  updateColumnThunk,
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

import { useState } from 'react';
import CardAddModal from 'components/Modal/CardModal/CardAddModal.jsx';
import TasksCardList from '../TasksCard/TasksCardList.jsx';

const TasksColumnItem = ({ column }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  const { _id, title } = column;

  const dispatch = useDispatch();

  const onUpdateColumn = () => {
    dispatch(updateColumnThunk(_id));
  };

  const onDeleteColumn = () => {
    dispatch(deleteColumnThunk(_id));
  };

  return (
    <>
      <Column id={_id}>
        <TitleColumnDiv>
          <h3>{title}</h3>
          <SvgDiv>
            <Button>
              <Icons onClick={onUpdateColumn}>
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

        <TasksCardList columnId={_id} />

        <ButtonForCard onClick={toggleModal}>
          <IconDoCard>
            <use href={`${sprite}#plus`}></use>
          </IconDoCard>
          Add another card
        </ButtonForCard>
      </Column>
      {showModal && <CardAddModal columnId={_id} showModal={setShowModal} />}
    </>
  );
};

export default TasksColumnItem;
