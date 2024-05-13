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
  import { selectCards } from '../../../redux/cards/cards-selectors';
  import { useSelector } from 'react-redux';
  import { PRIORITY_LIST} from '../../../constants/index'
  import {formatDate, formatCurrentDate} from '../../../helpers/dateFormat'
  // import React, {  useEffect, useState } from 'react';
  
  const TasksCard = () => {
    const currentDate = new Date();
    const card = useSelector(selectCards)
    const { title, description, priority, deadline = "2024-05-13" } = card;
    console.log(title)
    const priorityColor = PRIORITY_LIST.find(item => item.priority === priority)?.color || 'rgba(255, 255, 255, 0.3)';
    const formatCurrenDate = formatCurrentDate(currentDate)
    // const [showModal, setShowModal] = useState(false);
    //   const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
    // const currentDate = new Date().toISOString().slice(0, 10);

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
  
              <ParamsButtons>
                <ButtonsIcon>
                  <use href={`${sprite}#trash`}></use>
                </ButtonsIcon>
              </ParamsButtons>
            </SvgContainer>
          </CardsParams>
        </CardDiv>
      </Card>
    );
  };
  
  export default TasksCard;