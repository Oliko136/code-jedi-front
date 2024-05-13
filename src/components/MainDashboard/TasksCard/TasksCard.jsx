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
  } from './TasksCard.styled';
  import sprite from '../../../assets/svg/sprite.svg';
  import { selectCards } from '../../../redux/cards/cards-selectors';
  import { useSelector } from 'react-redux';
  // import React, {  useEffect, useState } from 'react';
  
  const TasksCard = () => {
    const card = useSelector(selectCards)
const {title, description, priority, deadline} = card;
// const formattedDate = deadline.split('-').reverse().join('/');

// const [date, setDate] = useState(deadline);

// useEffect(() => {
//   const currentDate = new Date().toISOString().slice(0, 10);
//   if (deadline === currentDate) {
//     setDate(date)
//   }
// }, [date,deadline]);
const currentDate = new Date().toISOString().slice(0, 10);

    return (
      <Card>
        <CardsColor></CardsColor>
  
        <CardDiv>
          <TextCard>{title}</TextCard>
          <CardsText>{description}</CardsText>
          <CardsParams>
            <PriorityDiv>
              <PriorityTitle>Priority</PriorityTitle>
              <div>
                {/* сюда надо из модалки создания карточки передатьиконку приоритетности */}
                <ColorCard></ColorCard>

                <ColorCardText>{priority}</ColorCardText>
              </div>
            </PriorityDiv>
  
            <DeadlineDiv>
              <DeadlineTitle>Deadline</DeadlineTitle>
              <DeadlineDate>{deadline}</DeadlineDate>
            </DeadlineDiv>
            <SvgContainer>
{deadline === currentDate && (
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