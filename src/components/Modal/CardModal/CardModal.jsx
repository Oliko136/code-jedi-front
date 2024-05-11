import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import {
  ButtonSend,
  IconWrap,
  ModalTitle,
  Modalform,
  PlusButton,
  Text,
  Textarea,
  TitleInput,
} from './CardModal.styled';
import Modal from '../Modal/Modal';
// import { useParams } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import CardPrirityList from './CardPriorityList';

const CardModal = ({ showModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cardPriority, setCardPriority] = useState('without');
  const [deadline, setDeadline] = useState(new Date());

  // const dispatch = useDispatch();

  //   const { columnId } = useParams();

  //   const PRIORITY_LIST = [
  //     { id: 0, priority: 'low', color: 'blue' },
  //     { id: 1, priority: 'medium', color: 'pink' },
  //     { id: 2, priority: 'high', color: 'green' },
  //     { id: 3, priority: 'without', color: 'gray' },
  //   ];

  const handleSubmit = e => {
    e.preventDefault();
    const { title, description, cardPriority } = e.target.elements;

    const data = {
      title: title.value,
      description: description.value,
      cardPriority: cardPriority.value,
    };

    //   dispatch(createCard(data));
  };

  return (
    <Modal width={335} height={522} onClose={() => showModal(false)}>
      <Modalform onSubmit={handleSubmit}>
        <ModalTitle>{'Add card'}</ModalTitle>
        <TitleInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          type="text"
          name="title"
          placeholder="Title"
        />
        <Textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text"
          name="description"
          placeholder="Description"
        />
        <Text>{'Label color'}</Text>
        <CardPrirityList />
        <Text>{'Deadline'}</Text>

        <ButtonSend type="submit">
          <PlusButton>
            <IconWrap>
              <Icon
                width={14}
                height={14}
                fillColor={'none'}
                strokeColor={'#000'}
                name={'icon-plus'}
              />
            </IconWrap>
            Add
          </PlusButton>
        </ButtonSend>
      </Modalform>
    </Modal>
  );
};

export default CardModal;
