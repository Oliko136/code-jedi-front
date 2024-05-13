import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../Modal/Modal/Modal';
// import { needhelp } from '../../../redux/needhelp/needhelp-operation.js';
// создать селекторы и заменить путь и файл
// import { selectUser } from '../../redux/auth/auth-selectors';
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
import { selectCurrentСolumn } from '../../../redux/column/column-selectors';
import {
  getColumnByIdThunk,
  updateColumnThunk,
} from '../../../redux/column/column-operations';

// нужно использовать id колонки?
const EditColumnModal = ({ showModal, columnId, title }) => {
  const [newtitle, setNewTitle] = useState(title ? title : '');
  const { _id: boardId } = useSelector(selectCurrentBoard);

  console.log('boardId :>> ', boardId);
  console.log('columnId :>> ', columnId);

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
    console.log(newtitle);

    const editColumn = {
      title: newtitle,
    };
    console.log(editColumn);
    try {
      dispatch(
        updateColumnThunk({ boardId: boardId, id: columnId, body: editColumn })
      );
      toast('You have successfully edited the column ✅', TOASTER);
      showModal(false);
    } catch (error) {
      return error.message;
    }
  };

  const handleTitleChange = evt => {
    setNewTitle(evt.target.value);
    // dispatch(updateColumnThunk)(newtitle);
  };

  return (
    <>
      <Modal width={335} height={221} onClose={() => showModal(false)}>
        <Modalform onSubmit={handleSubmit}>
          <ModalTitle>{'Edit column'}</ModalTitle>
          <TitleInput
            value={newtitle}
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
