import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Modal from '../../Modal/Modal/Modal';
import { toast } from 'react-toastify';
import {
  Modalform,
  ModalTitle,
  TitleInput,
  ButtonSend,
  PlusButton,
  IconWrap,
} from './ColumnModal.styled';
import Icon from '../../Icon/Icon';
import { selectCurrentBoard } from '../../../redux/boards/boards-selectors.js';
import { addColumnThunk } from '../../../redux/column/column-operations';

const ColumnModal = ({ showModal }) => {
  const { _id } = useSelector(selectCurrentBoard);
  console.log('_id :>> ', _id);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const TOASTER = {
    style: {
      border: '2px solid #bedbb0',
      backgroundColor: '#1f1f1f',
      color: '#fff',
      textAlign: 'center',
    },
    position: 'top-center',
    duration: 2000,
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    console.log(title);

    const newColumn = {
      title,
    };

    console.log(newColumn);
    try {
      dispatch(addColumnThunk({ boardId: _id, body: newColumn }));
      toast('You have successfully created a column ✅', TOASTER);
      showModal(false);
    } catch (error) {
      return error.message;
    }
  };

  const handleTitleChange = evt => {
    setTitle(evt.target.value);
  };

  return (
    <>
      <Modal width={335} height={221} onClose={() => showModal(false)}>
        <Modalform onSubmit={handleSubmit}>
          <ModalTitle>{'Add column'}</ModalTitle>
          <TitleInput
            value={title}
            onChange={handleTitleChange}
            required
            type="text"
            name="title"
            placeholder="Titie"
          />

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
    </>
  );
};

export default ColumnModal;
