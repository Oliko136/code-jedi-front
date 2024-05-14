import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateBoardThunk,
  getAllBoardsThunk } from '../../../redux/boards/boards-operations';
import {  selectCurrentBoard } from '../../../redux/boards/boards-selectors';

import { validateInputMaxLength } from '../../../helpers/validateInputMaxLength.js';
import Modal from '../Modal/Modal';
import { IconsList } from './IconsList';
import { BacksList } from '../BoardModal/BacksList';
import Plus from '../../Icon/Plus';
import {
  Form,
  Title,
  Label,
  Input,
  Text,
  Button,
  Span,
} from './BoardModal.styled';


const BoardModalEdit = ({ variant, closeModal, menu, closeMenu, currentBoard}) => {
  const [errorMsgShown, setErrorMsgShown] = useState(false);
  const [errorClassName, setErrorClassName] = useState('');

  const dispatch = useDispatch();
  const oneBoard = useSelector(selectCurrentBoard);


  const handleSubmit = e => {
    e.preventDefault();
   const { title, background, iconId } = e.target.elements;
  const data = {
      title: title.value,
      icon: iconId.value,
      background: background.value,
     };
 
 dispatch(updateBoardThunk({ boardId: oneBoard._id, newData: data  }))
 dispatch(getAllBoardsThunk());
    closeModal();
    if (menu) closeMenu();
  
    return;
  };

  return (
    <Modal width={350} onClose={closeModal}>
      <Form onSubmit={handleSubmit}>
        <Title>Edit board</Title>
        <Label>
          <Input
            className={errorClassName}
            type="text"
            placeholder={'Title'}
            name="title"
            defaultValue={oneBoard.title}
            autoComplete="off"
            maxLength={20}
            onChange={e =>
              validateInputMaxLength(e, setErrorMsgShown, setErrorClassName)
            }
          />
          {errorMsgShown && <p>{'Maximum title length is 20 symbols'}</p>}
        </Label>
        <Text>{'Icons'}</Text>
        <IconsList iconId={ oneBoard.label} />
        <Text>{'Background'}</Text>

        <BacksList
          backgroundId={oneBoard.background._id}
        />
        <Button type="submit">
          <Span>
            <Plus
              width={14}
              height={14}
              strokeColor={'var(--btn-icon-color)'}
            />
          </Span>
          Edit
        </Button>
      </Form>
    </Modal>
  );
};

export default BoardModalEdit;
