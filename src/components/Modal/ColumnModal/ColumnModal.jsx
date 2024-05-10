import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Modal from '../../Modal/Modal/Modal';
// import { needhelp } from '../../../redux/needhelp/needhelp-operation.js';
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

// нужно создавать id колонки?
const ColumnModal = ({ showModal }) => {
  const { boardId } = useParams();

  const [title, setTitle] = useState('');
//   const dispatch = useDispatch();

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
    console.log(title)
    
const newColumn = {
      board: boardId,
      title,
    };
    console.log(newColumn)
    try {
        // создать опер
    //   dispatch(addColumn(newColumn));
      toast('You have successfully created a column ✅', TOASTER);
      showModal(false);
    } catch (error) {
      return error.message
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
                <Icon width={14}
                      height={14}
                      fillColor={'none'}
                      strokeColor={'var(--icon-plus)'}
                      name={"icon-plus"}
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
