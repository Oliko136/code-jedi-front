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
  import { useState } from 'react';
  import sprite from '../../../assets/svg/sprite.svg';
  import RadioPop from '../RadioPop/RadioPop'


  const TasksCard = () => {
    const [showRadioPop, setShowRadioPop] = useState(false);
    const toggleRadioPop = () => setShowRadioPop(prevShowRadio => !prevShowRadio);
    const [todoList, setTodoList] = useState(1);

    const handleChange = (value) => {
        setTodoList(value);
        setShowRadioPop(false);
    };

    return (
      <>
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
              <ButtonsIcon onClick={toggleRadioPop} type="button">
                {/* <ButtonsIcon onClick={toggleRadioPop} type="button"> */}
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
      {showRadioPop && (<RadioPop todoList={todoList} handleChange={handleChange} />)}
      {/* {showRadioPop && (<RadioPop todoList={initial} showModal={setShowRadioPop} />)} */}
      </>
    );
  };
  
  export default TasksCard;