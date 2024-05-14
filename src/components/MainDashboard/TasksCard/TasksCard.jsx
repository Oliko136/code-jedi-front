import { useState ,useEffect} from 'react';
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
    Line, Wrap,ButtonsIconBell
  } from './TasksCard.styled';
  import sprite from '../../../assets/svg/sprite.svg';
import { PRIORITY_LIST } from '../../../constants/index';
import { formatDate,  isSameDay } from '../../../helpers/dateFormat';
import { deleteCardThunk } from '../../../redux/cards/cards-operations';
import { selectCurrentBoard } from '../../../redux/boards/boards-selectors.js';
import DeleteModal from '../../Modal/DeleteModal/DeleteModal';
import CardEditModal from 'components/Modal/CardModal/CardEditModal';
  
const TasksCard = ({ card, columnId }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  
  const { title, description, priority, deadline = currentDate } = card;
  const deadlineDate = new Date(deadline);

  const priorityColor = PRIORITY_LIST.find(item => item.priority === priority)?.color || PRIORITY_LIST[0].color;
  
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [showCardEditModal, setShowCardEditModal] = useState(false);
  
  const dispatch = useDispatch();
  const { _id: boardId } = useSelector(selectCurrentBoard);

  const handleDeleteCard = () => {
    dispatch(deleteCardThunk({ boardId, columnId, cardId: card._id }));
  }

  const toggleCardEditModal = () =>
    setShowCardEditModal(prevShowModal => !prevShowModal);

  /*const handleCardUpdate = (cardData) => {
    setCardData(cardData);
  };*/

    return (
      <Card>
        <CardsColor style={{ backgroundColor: priorityColor }}></CardsColor>
  
        <CardDiv>
          <TextCard>{title}</TextCard>
          <CardsText>{description}</CardsText>
         
          <Line></Line>
          <CardsParams>
            <Wrap>
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
            </Wrap>
           
            <SvgContainer>

            {isSameDay(deadlineDate, currentDate) && (
            <ParamsButtons>
            <ButtonsIconBell>
             <use href={`${sprite}#bell`}></use>
            </ButtonsIconBell>
            </ParamsButtons>)}

              <ParamsButtons>
                <ButtonsIcon>
                  <use href={`${sprite}#broken-right`}></use>
                </ButtonsIcon>
              </ParamsButtons>
  
              <ParamsButtons type="button" onClick={toggleCardEditModal}>
                <ButtonsIcon>
                  <use href={`${sprite}#pencil`}></use>
                </ButtonsIcon>
              </ParamsButtons>
  
              <ParamsButtons type="button" onClick={() => setIsDeleteModalShown(true)}>
                <ButtonsIcon>
                  <use href={`${sprite}#trash`}></use>
                </ButtonsIcon>
              </ParamsButtons>
              {showCardEditModal && (
                <CardEditModal
                  showModal={setShowCardEditModal}
                  cardData={card}
                />
              )}
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