import { CreateBoard } from './ScreenPage.styled';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

const ScreensPage = () => {
  const AddBoardForm = () => {};

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  return (
    <>
      <p>
        Before starting your project, it is essential{' '}
        <CreateBoard onClick={toggleModal}>to create a board</CreateBoard> to
        visualize and track all the necessary tasks and milestones. This board
        serves as a powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </p>

      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddBoardForm handleClose={toggleModal} />
          <p color="white">MODAL WINDOW</p>
        </Modal>
      )}
    </>
  );
};

export default ScreensPage;
