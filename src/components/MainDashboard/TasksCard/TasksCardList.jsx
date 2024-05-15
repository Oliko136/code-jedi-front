import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectCards } from "../../../redux/cards/cards-selectors.js";
import { selectCurrentBoard } from "../../../redux/boards/boards-selectors.js";
import { getAllCardsThunk, deleteCardThunk } from "../../../redux/cards/cards-operations.js";
import TasksCard from "./TasksCard";
import { CardContainer } from "./TasksCardList.styled.jsx";
import {getFilter} from '../../../redux/filter/filter-selectors.js'

const TasksCardList = ({columnId}) => {
    const cardsAll = useSelector(selectCards);

    const columnCards = cardsAll.filter(({column}) => column._id === columnId || column === columnId)
    const filter = useSelector(getFilter);
    const filteredCards = columnCards.filter(({priority}) => priority.toLowerCase() === filter.toLowerCase() )
    const cards = filter === 'all' ? columnCards : filteredCards; 
    
  
    const board = useSelector(selectCurrentBoard);
    const { _id: boardId } = board;

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getAllCardsThunk({ boardId, columnId }));
    }, [dispatch, boardId, columnId]);
  
  const handleDeleteCard = (boardId, columnId, card) => {
    try {
      dispatch(deleteCardThunk({ boardId, columnId, cardId: card._id })).then(action => {
        if (action.type !== 'cards/deleteCard/fulfilled') {
          dispatch(getAllCardsThunk(boardId, columnId));
        }
      })
    } catch (error) {
      return error.message;
    }
  }

  return (
    <CardContainer>
      {cards.length > 0 &&
        cards.map(card => (
          <TasksCard key={card._id} card={card} columnId={columnId} onDelete={()=> handleDeleteCard(boardId, columnId, card )}/>
        ))}
    </CardContainer>
  );
};

export default TasksCardList;