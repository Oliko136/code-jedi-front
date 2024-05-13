import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Card,
    CardsColor,
    CardDiv,
    CardsParams,
    PriorityDiv,
    PriorityTitle,
    ColorCard,
    CardsText,
    ColorCardText,
    DeadlineDiv,
    DeadlineTitle,
    DeadlineDate,
    SvgContainer,
    ParamsButtons,
    ButtonsIcon,
    TextCard,
    Line
  } from './TasksCard.styled';
  import sprite from '../../../assets/svg/sprite.svg';
import { PRIORITY_LIST } from '../../../constants/index';
import { formatDate, formatCurrentDate } from '../../../helpers/dateFormat';
import { deleteCardThunk } from '../../../redux/cards/cards-operations';
import { selectCurrentBoard } from '../../../redux/boards/boards-selectors.js';
import DeleteModal from '../../Modal/DeleteModal/DeleteModal';
  
  
const TasksCard = ({ card, columnId }) => {
  const currentDate = new Date();
  const { title, description, priority, deadline = "2024-05-13" } = card;
  console.log(title);
  const priorityColor = PRIORITY_LIST.find(item => item.priority === priority)?.color || PRIORITY_LIST[0].priority;
    // const qw = PRIORITY_LIST[0].priority
    // console.log(qw)
  const formatCurrenDate = formatCurrentDate(currentDate)
  console.log(priorityColor);
    // const [showModal, setShowModal] = useState(false);
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const dispatch = useDispatch();
  const { _id: boardId } = useSelector(selectCurrentBoard);

  const handleDeleteCard = () => {
    dispatch(deleteCardThunk({ boardId, columnId, cardId: card._id }));
  }
    

    return (
      <Card>
        <CardsColor style={{ backgroundColor: priorityColor }}></CardsColor>
  
        <CardDiv>
          <TextCard>{title}</TextCard>
          <CardsText>{description}</CardsText>
         
          <Line></Line>
          <CardsParams>
            <PriorityDiv>
              <PriorityTitle>Priority</PriorityTitle>
              <div>
     
                <ColorCard style={{ backgroundColor: priorityColor }}></ColorCard>

                <ColorCardText>{priority}</ColorCardText>
              </div>
            </PriorityDiv>
  
            <DeadlineDiv>
              <DeadlineTitle>Deadline</DeadlineTitle>
              <DeadlineDate>{formatDate(deadline)}</DeadlineDate>
            </DeadlineDiv>
            <SvgContainer>
{deadline === formatCurrenDate && (
  <ParamsButtons>
  <ButtonsIcon>
    <use href={`${sprite}#bell`}></use>
  </ButtonsIcon>
</ParamsButtons>
)}
              <ParamsButtons>
                <ButtonsIcon>
                  <use href={`${sprite}#broken-right`}></use>
                </ButtonsIcon>
              </ParamsButtons>
  
              <ParamsButtons>
                <ButtonsIcon>
                  <use href={`${sprite}#pencil`}></use>
                </ButtonsIcon>
              </ParamsButtons>
  
              <ParamsButtons type="button" onClick={() => setIsDeleteModalShown(true)}>
                <ButtonsIcon>
                  <use href={`${sprite}#trash`}></use>
                </ButtonsIcon>
              </ParamsButtons>
              {isDeleteModalShown && (
                <DeleteModal
                  onClose={() => setIsDeleteModalShown(false)}
                  onConfirm={handleDeleteCard}
                />
              )}
            </SvgContainer>
          </CardsParams>
        </CardDiv>
      </Card>
    );
  };
  
  export default TasksCard;