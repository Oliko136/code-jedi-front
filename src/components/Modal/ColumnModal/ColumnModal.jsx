import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Modal from '../../Modal/Modal/Modal';
import Icon from '../../Icon/Icon';
import { selectCurrentBoard } from '../../../redux/boards/boards-selectors.js';
import { addColumnThunk } from '../../../redux/column/column-operations';
import {
  Modalform,
  ModalTitle,
  TitleInput,
  ButtonSend,
  PlusButton,
  IconWrap,
} from './ColumnModal.styled';

const ColumnModal = ({ showModal }) => {
  const [title, setTitle] = useState('');
  const { _id } = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();

  const handleSubmit = async evt => {
    evt.preventDefault();

    const newColumn = {
      title,
    };

    try {
      dispatch(addColumnThunk({ boardId: _id, body: newColumn }));
      
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
