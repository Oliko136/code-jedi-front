import {
  DivForColumns,
  TitleColumnDiv,
  Button,
  Icons,
  SvgDiv,
  ButtonForCard,
  IconDoCard,
  Column,
} from './TasksColumn.styled';
import sprite from '../../../assets/svg/sprite.svg';
import TasksCard from '../TasksCard/TasksCard';
import ButtonForColumn from 'pages/BoardsPage/ButtonForColumn/ButtonForColumn';

const TasksColumn = () => {
  return (
    <DivForColumns>
      <Column>
        <TitleColumnDiv>
          <h3>Title for colum</h3>
          <SvgDiv>
            <Button>
              <Icons>
                <use href={`${sprite}#pencil`}></use>
              </Icons>
            </Button>

            <Button>
              <Icons>
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

      <ButtonForColumn />
    </DivForColumns>
  );
};

export default TasksColumn;
