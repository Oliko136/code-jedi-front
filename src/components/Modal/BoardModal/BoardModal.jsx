import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  createBoardThunk,
  updateBoardThunk,
} from '../../../redux/boards/boards-operations';
import { selectOneBoard } from '../../../redux/boards/boards-selectors';
import { TOASTER } from '../../../constants/index';
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
import { useNavigate } from 'react-router-dom';

const BoardModal = ({ variant, closeModal, menu, closeMenu }) => {
  const [errorMsgShown, setErrorMsgShown] = useState(false);
  const [errorClassName, setErrorClassName] = useState('');

  const titleRef = useRef(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const oneBoard = useSelector(selectOneBoard);

  useEffect(() => {
    titleRef.current.focus();
  }, []);


  const handleSubmit = e => {
    e.preventDefault();
    const { title, background, iconId } = e.target.elements;

    if (!title.value.trim()) {
      return toast('Enter title to create a board ❗️', TOASTER);
    }
    
    const data = {
      title: title.value,
      icon: iconId.value,
      background: background.value === '' ? 'default' : background.value,
    };

    if (variant === 'add') {
      dispatch(createBoardThunk(data)).then(action => {
        if (action.type === 'boards/createBoard/fulfilled') {
          navigate(action.payload.title);
          toast('Board was created successfully ✅', TOASTER);
        }
      });
    } else {
      dispatch(updateBoardThunk({ boardId: oneBoard._id, dataUpdate: data }));
      toast('Board was edited successfully ✅', TOASTER);
    }

    closeModal();
    if (menu) closeMenu();
    return;
  };

  return (
    <Modal width={350} onClose={closeModal}>
      <Form onSubmit={handleSubmit}>
        <Title>{variant === 'add' ? 'New board' : 'Edit board'}</Title>
        <Label>
          <Input
            className={errorClassName}
            ref={titleRef}
            type="text"
            placeholder={'Title'}
            name="title"
            defaultValue={variant === 'add' ? '' : oneBoard.title}
            autoComplete="off"
            maxLength={20}
            onChange={e =>
              validateInputMaxLength(e, setErrorMsgShown, setErrorClassName)
            }
          />
          {errorMsgShown && <p>{'Maximum title length is 20 symbols'}</p>}
        </Label>
        <Text>{'Icons'}</Text>
        <IconsList iconId={variant === 'add' ? 'project' : oneBoard.title} />
        <Text>{'Background'}</Text>

        <BacksList
          backgroundId={variant === 'add' ? 'default' : oneBoard.background}
        />
      

        <Button type="submit">
          <Span>
            <Plus
              width={14}
              height={14}
              strokeColor={'var(--btn-icon-color)'}
            />
          </Span>
          {variant === 'add' ? 'Create' : 'Edit'}
        </Button>
      </Form>
    </Modal>
  );
};

export default BoardModal;
