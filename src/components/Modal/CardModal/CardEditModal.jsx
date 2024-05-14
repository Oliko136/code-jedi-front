import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import Modal from '../Modal/Modal';
import Icon from 'components/Icon/Icon';
import CardPriorityList from './CardPriorityList';
import Calendar from 'components/Calendar/Calendar';
import { updateCardThunk } from '../../../redux/cards/cards-operations';
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

const CardEditModal = ({ showModal, cardData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cardPriority, setCardPriority] = useState('without');
  const [deadline, setDeadline] = useState(new Date());

  const dispatch = useDispatch();

  useEffect(() => {
    if (cardData) {
      setTitle(cardData.title || '');
      setDescription(cardData.description || '');
      setCardPriority(cardData.cardPriority || 'without');
      setDeadline(cardData.deadline || new Date());
    }
  }, [cardData]);

  const changeDeadline = date => {
    setDeadline(date);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      id: cardData._id,
      title: title.trim(),
      description: description.trim(),
      cardPriority,
      deadline,
    };

    dispatch(updateCardThunk(data));
  };

  return (
    <Modal width={335} height={522} onClose={() => showModal(false)}>
      <Modalform onSubmit={handleSubmit}>
        <ModalTitle>{'Edit card'}</ModalTitle>
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
        <CardPriorityList value={cardPriority} onChange={setCardPriority} />
        <Text>{'Deadline'}</Text>
        <Calendar date={deadline} changeDate={changeDeadline} />
        <ButtonSend type="submit">
          <PlusButton>
            <IconWrap>
              <Icon
                width={14}
                height={14}
                fillColor={'none'}
                strokeColor={'var(--icon-plus)'}
                name={'icon-plus'}
              />
            </IconWrap>
            Edit
          </PlusButton>
        </ButtonSend>
      </Modalform>
    </Modal>
  );
};

export default CardEditModal;
