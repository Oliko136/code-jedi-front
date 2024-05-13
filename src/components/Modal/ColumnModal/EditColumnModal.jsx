import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { updateColumnThunk } from '../../../redux/column/column-operations';

const EditColumnModal = ({ showModal, columnId, title, onColumnUpdate }) => {
  const [newTitle, setNewTitle] = useState(title ? title : '');
  const { _id: boardId } = useSelector(selectCurrentBoard);

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

    const editColumn = {
      title: newTitle,
    };
    try {
      dispatch(
        updateColumnThunk({ boardId: boardId, id: columnId, body: editColumn })
      );
      if (onColumnUpdate) {
        onColumnUpdate(newTitle);
      }
      toast('You have successfully edited the column ✅', TOASTER);
      showModal(false);
    } catch (error) {
      return error.message;
    }
  };

  const handleTitleChange = evt => {
    setNewTitle(evt.target.value);
  };

  return (
    <>
      <Modal width={335} height={221} onClose={() => showModal(false)}>
        <Modalform onSubmit={handleSubmit}>
          <ModalTitle>{'Edit column'}</ModalTitle>
          <TitleInput
            value={newTitle}
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
              Edit
            </PlusButton>
          </ButtonSend>
        </Modalform>
      </Modal>
    </>
  );
};

export default EditColumnModal;
