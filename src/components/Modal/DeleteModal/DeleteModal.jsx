import Modal from '../Modal/Modal';
import { Container, Title, ConfirmButton } from './DeleteModal.styled';

const DeleteModal = ({ onClose, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
    onClose(); // закрытие модального окна после подтверждения удаления
  };
  return (
    <Modal width={335} height={200} onClose={onClose}>
      <Container>
        <Title>{'Are you sure you want to delete this?'}</Title>

        <ConfirmButton type="button" onClick={handleConfirm}>
          {'Confirm'}
        </ConfirmButton>
      </Container>
    </Modal>
  );
};

export default DeleteModal;
