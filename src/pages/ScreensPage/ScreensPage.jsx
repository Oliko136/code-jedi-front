import { CreateBoard } from './ScreenPage.styled';
import { useState } from 'react';
import BoardModal from 'components/Modal/BoardModal/BoardModal';
import { MainContainer } from 'pages/HomePage/HomePage.styled';
const ScreensPage = ({ showSidebar }) => {
  const [isAddBoardModalShown, setIsAddBoardModalShown] = useState(false);

  return (
    <MainContainer className={showSidebar ? 'showSidebar' : ''}>
      <p>
        Before starting your project, it is essential{' '}
        <CreateBoard
          onClick={() => setIsAddBoardModalShown(true)}
          type="button"
        >
          to create a board
        </CreateBoard>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>

      {isAddBoardModalShown && (
        <BoardModal
          variant="add"
          closeModal={() => setIsAddBoardModalShown(false)}
          //  menu={menu}
          closeMenu={showSidebar}
        />
      )}
    </MainContainer>
  );
};

export default ScreensPage;
