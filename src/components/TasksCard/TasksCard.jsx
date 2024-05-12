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
  } from './TasksCard.styled';
  import sprite from '../../../assets/svg/sprite.svg';
  
  const TasksCard = () => {
    return (
      <Card>
        <CardsColor></CardsColor>
  
        <CardDiv>
          <h3>{'Cards title'}</h3>
          <CardsText>
            Create a visually stunning and eye-catching watch dial design that
            embodies our brand's
          </CardsText>
          <CardsParams>
            <PriorityDiv>
              <PriorityTitle>Priority</PriorityTitle>
              <div>
                <ColorCard></ColorCard>
                <ColorCardText>{'Color'}</ColorCardText>
              </div>
            </PriorityDiv>
  
            <DeadlineDiv>
              <DeadlineTitle>Deadline</DeadlineTitle>
              <DeadlineDate>00/00/0000</DeadlineDate>
            </DeadlineDiv>
            <SvgContainer>
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