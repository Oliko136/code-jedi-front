import { TextDiv, TextOnHomePage, CreateBoard } from './HomePageText.styled';
import BoardModal from 'components/Modal/BoardModal/BoardModal';

import { useState } from 'react';

const HomePageText = ({ showSidebar }) => {
  const [isAddBoardModalShown, setIsAddBoardModalShown] = useState(false);

  return (
    <TextDiv showSidebar={showSidebar}>
      <TextOnHomePage>
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
      </TextOnHomePage>

      {isAddBoardModalShown && (
        <BoardModal
          variant="add"
          closeModal={() => setIsAddBoardModalShown(false)}
          //  menu={menu}
          closeMenu={showSidebar}
        />
      )}
    </TextDiv>
  );
};

export default HomePageText;
