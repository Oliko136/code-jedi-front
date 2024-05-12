import { useDispatch } from 'react-redux';
import {
  deleteColumnThunk,
  uupdateColumnThunk,
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

const TasksColumnItem = ({ column }) => {
  const { _id, title } = column;

  const dispatch = useDispatch();

  const onUpdateColumn = () => {
    dispatch(uupdateColumnThunk(_id));
  };

  const onDeleteColumn = () => {
    dispatch(deleteColumnThunk(_id));
  };

  return (
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

      <TasksCard />

      <ButtonForCard>
        <IconDoCard>
          <use href={`${sprite}#plus`}></use>
        </IconDoCard>
        Add another card
      </ButtonForCard>
    </Column>
  );
};

export default TasksColumnItem;
