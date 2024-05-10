import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
// import { MdFileUpload, MdDownloadDone } from 'react-icons/md';
import {
  createBoard,
  updateBoard,
} from '../../../redux/boards/boards-operations';
import { selectOneBoard } from '../../../redux/boards/boards-selectors';
import { TOASTER_CONFIG } from '../../../constants/index.js';
// import { DEFAULT_BACKGROUND_ID } from '../../../constants/index.js';
import { validateInputMaxLength } from '../../../helpers/validateInputMaxLength.js';
import Modal from '../Modal/Modal';
import { IconsList } from './IconsList';
// import { BacksList } from '../BoardModal/BacksList';
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
  const [customBackground, setCustomBackground] = useState(null);
  console.log(setCustomBackground);
  // const defaultBackgroundId = nanoid();

  const titleRef = useRef(null);
  const dispatch = useDispatch();
  // const { t } = useTranslation();
  const navigate = useNavigate();
  const oneBoard = useSelector(selectOneBoard);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  // const handleUpload = event => {
  //   const file = event.target.files[0];
  //   setCustomBackground(file);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, background, iconId } = e.target.elements;

    if (!title.value.trim()) {
      return toast('Enter title to create a board ❗️', TOASTER_CONFIG);
    }

    const data = {
      title: title.value,
      iconId: iconId.value,
      background: customBackground ?? background.value,
    };

    if (variant === 'add') {
      dispatch(createBoard(data)).then(action => {
        if (action.type === 'boards/createBoard/fulfilled')
          navigate(`board/${action.payload._id}`);
      });
      toast('Board was created successfully ✅', TOASTER_CONFIG);
    } else {
      dispatch(updateBoard({ boardId: oneBoard._id, dataUpdate: data }));
      toast('Board was edited successfully ✅', TOASTER_CONFIG);
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
        <IconsList iconId={variant === 'add' ? 0 : oneBoard.icon_id} />
        <Text>{'Background'}</Text>
        {/* <BacksList
          backgroundId={
            variant === 'add' ? DEFAULT_BACKGROUND_ID : oneBoard.background._id
          }
          customBackground={customBackground}
        /> */}

        {/* <Text>{'Choose your custom background'}</Text>
        <Label>
          <BackCustomInputRadio
            type="radio"
            name="background"
            defaultChecked={defaultBackgroundId}
          />
        </Label>

        <StyledFileLabel>
          {customBackground
            ? 'boards.modals.fileChosen'
            : 'boards.modals.chooseFile'}
          <StyledFileInput
            type="file"
            name="background"
            onChange={handleUpload}
          />
          {customBackground ? <MdDownloadDone /> : <MdFileUpload />}
        </StyledFileLabel> */}

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
