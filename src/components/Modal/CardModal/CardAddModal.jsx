import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import Modal from '../Modal/Modal';
import Icon from 'components/Icon/Icon';
import CardPriorityList from './CardPriorityList';
import Calendar from 'components/Calendar/Calendar';
import { addCardThunk } from '../../../redux/cards/cards-operations';
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

const CardAddModal = ({ showModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cardPriority, setCardPriority] = useState('without');
  const [deadline, setDeadline] = useState(new Date());

  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  const changeDeadline = date => {
    setDeadline(date);
  };
  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      title: title.trim(),
      description: description.trim(),
      cardPriority,
      deadline,
    };

    dispatch(addCardThunk(data));
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
            Add
          </PlusButton>
        </ButtonSend>
      </Modalform>
    </Modal>
  );
};

export default CardAddModal;