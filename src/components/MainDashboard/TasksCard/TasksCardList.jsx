import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectCards } from "../../../redux/cards/cards-selectors.js";
import { selectCurrentBoard } from "../../../redux/boards/boards-selectors.js";
import { getAllCardsThunk } from "../../../redux/cards/cards-operations.js";
import TasksCard from "./TasksCard";
import { CardContainer } from "./TasksCardList.styled.jsx";

const TasksCardList = ({columnId}) => {
    const cards = useSelector(selectCards);
    const board = useSelector(selectCurrentBoard);
    const { _id: boardId } = board;

    // console.log(cards, boardId, columnId);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllCardsThunk({ boardId, columnId }));
    }, [dispatch, boardId, columnId]);

  return (
    <CardContainer>
      {cards.length > 0 &&
        cards.map(card => (
          <TasksCard key={card._id} card={card} columnId={columnId} />
        ))}
    </CardContainer>
  );
};

export default TasksCardList;