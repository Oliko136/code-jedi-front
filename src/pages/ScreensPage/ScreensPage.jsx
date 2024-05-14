import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HeaderDashboard from 'components/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/MainDashboard/MainDashboard';
import { getBoardByIdThunk } from '../../redux/boards/boards-operations.js';
import {
  selectBoards,
  selectCurrentBoard,
} from '../../redux/boards/boards-selectors.js';
import { ContainerScreensPage } from './ScreenPage.styled';
import { handleBackgroundChange } from './handleBackgorundChange.js';

const ScreensPage = () => {
  const boards = useSelector(selectBoards);
  const board = useSelector(selectCurrentBoard);
  const { boardName } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (boardName) {
        const board = boards.find(board => board.title === boardName);
        const boardId = board._id;
        dispatch(getBoardByIdThunk(boardId));
      } else {
        dispatch(getBoardByIdThunk(boards[0]._id));
      }
      
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch, boardName, boards]);

  const backgroundImage = handleBackgroundChange(board.background);

  return (
    <ContainerScreensPage backgroundImage={backgroundImage}>
      <HeaderDashboard />
      <MainDashboard />
    </ContainerScreensPage>
  );
};

export default ScreensPage;
