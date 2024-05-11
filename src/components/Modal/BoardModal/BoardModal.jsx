import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
// import { MdFileUpload, MdDownloadDone } from 'react-icons/md';
import {
  createBoardThunk,
  updateBoardThunk,
} from '../../../redux/boards/boards-operations';
import { selectCurrentBoard } from '../../../redux/boards/boards-selectors';
import { TOASTER_CONFIG } from '../../../constants/index.js';
// import { DEFAULT_BACKGROUND_ID } from '../../../constants/index.js';
import { validateInputMaxLength } from '../../../helpers/validateInputMaxLength.js';
import Modal from '../Modal/Modal';
import { IconsList } from './IconsList';
//import { BacksList } from '../BoardModal/BacksList';
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
//import { useNavigate } from 'react-router-dom';

const BoardModal = ({ variant, closeModal, menu, closeMenu }) => {
  const [errorMsgShown, setErrorMsgShown] = useState(false);
  const [errorClassName, setErrorClassName] = useState('');
  const [customBackground, setCustomBackground] = useState(null);
  console.log(customBackground);
  console.log(setCustomBackground);
  const defaultBackgroundName = "default";

  const titleRef = useRef(null);
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const currentBoard = useSelector(selectCurrentBoard);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  // const handleUpload = event => {
  //   const file = event.target.files[0];
  //   setCustomBackground(file);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, iconId } = e.target.elements;
    //console.log(background);

    if (!title.value.trim()) {
      return toast('Enter title to create a board ❗️', TOASTER_CONFIG);
    }

    const data = {
      title: title.value,
      iconId: iconId.value,
      background: defaultBackgroundName,
    };

    if (variant === 'add') {
      dispatch(createBoardThunk(data)).then(({payload}) => console.log(payload));
      /*.then(action => {
        if (action.type === 'boards/createBoard/fulfilled')
          navigate(`board/${action.payload._id}`);
      });*/
      toast('Board was created successfully ✅', TOASTER_CONFIG);
    } else {
      dispatch(updateBoardThunk({ boardId: currentBoard._id, dataUpdate: data }));
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
            defaultValue={variant === 'add' ? '' : currentBoard.title}
            autoComplete="off"
            maxLength={20}
            onChange={e =>
              validateInputMaxLength(e, setErrorMsgShown, setErrorClassName)
            }
          />
          {errorMsgShown && <p>{'Maximum title length is 20 symbols'}</p>}
        </Label>
        <Text>{'Icons'}</Text>
        <IconsList iconId={variant === 'add' ? 0 : currentBoard.icon_id} />
        <Text>{'Background'}</Text>
        {/*<BacksList
          backgroundId={
            variant === 'add' ? DEFAULT_BACKGROUND_ID : oneBoard.background._id
          }
          customBackground={customBackground}
        />*/}

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
