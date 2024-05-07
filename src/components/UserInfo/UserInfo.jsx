import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { updateUserAvatar, updateUserInfo } from '../../redux/auth/auth-operations';
// хук на useSelector
// import { useAuth } from 'hooks';
import  registerSchema  from '../../schemas/registerSchema';
// нужен Loader на кнопку?
// import SmallLoader from 'components/Loader/SmallLoader';
import {
    FormUserInfo,
    AddPhoto,
    AvatarEdit,
    Avatar,
    PlusButton,
} from './UserInfo.styled';
import {
    Input,
    SubmitBtn,
    ErrorPara,
    PassInputWrap,
    HideBtn,} from '../RegisterForm/RegisterForm.styled'
import Icon from "../../Icon/Icon"
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"

import Modal from 'components/Modal/Modal';
import { selectUser, selectUserAvatar } from 'redux/auth/auth-selectors';



const UserInfo = ({showModal}) => {
const {name, email,password} = selectUser
  
  const [visible, setVisible] = useState(false);
  const [avatar_url, setAvatar_url] = useState(useSelector(selectUserAvatar));
  // const [nameChange, setNameChange] = useState(name);
  // const [emailChange, setEmailChange] = useState(email);
  // const [passwordChange, setPasswordChange] = useState(password);
  const [preview, setPreview] = useState(null);
  // const [errorMsgShown, setErrorMsgShown] = useState(false);
  // const [errorClassName, setErrorClassName] = useState('');
  const dispatch = useDispatch();
  // const { isLoading } = useAuth();

  function changeImg(event) {
    setAvatar_url(event.target.files[0]);
    const file = new FileReader();
    file.onload = function () {
      setPreview(file.result);
    };
    file.readAsDataURL(event.target.files[0]);
    dispatch(updateUserAvatar(avatar_url))
  }

  const submit = async (evt) => {
    console.log(evt.email,'qwe' );
    
    const formData = {
          name: evt.name,
          email: evt.email,
          password: evt.password,
        };
        // console.log(formData)
        const isValid = await registerSchema.isValid(formData);            

          if (!isValid) {
            return;
           }
           
        dispatch(updateUserInfo({ ...formData }))
        // await new Promise(res => setTimeout(res, 500));
    reset();
  }

  const {register, handleSubmit,  reset, formState:{errors, isValid}  } = useForm({
    initialValues: {
             name: name,
            email: email,
            password: password,
          },
    mode: "onBlur",
    resolver:yupResolver(registerSchema)
  })

  return (
    <Modal width={335} height={440} onClose={() => showModal(false)}>
      <h3>Edit  profile</h3>
        

      <Avatar>
        <AvatarEdit>
            {avatar_url !== 'default' ? (
              <img
                src={preview || avatar_url}
                alt="avatar"
                style={{ width: 68, height: 68, objectFit: 'cover' }}
              />
            ) : (
              <Icon width={68}
              height={68}
              fillColor={'var(--bgColorAuth)'}
              strokeColor={'var(--inputBgColor)'}
              name={"user-avatar"}
              />
            )}
            <PlusButton>
              <Icon width={20}
                    height={20}
                    fillColor={'none'}
                    strokeColor={'var(--buttonColor)'}
                    name={"icon-plus"}
                    />
              <AddPhoto
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={changeImg}
              />
            </PlusButton>
         </AvatarEdit>
      </Avatar>
      <FormUserInfo onSubmit={handleSubmit(submit)}>

         <label>
             <Input
           
             {...register('name') }
              
              name="name"
              placeholder='Enter your name'
            />
            {errors?.name && (<ErrorPara>{errors?.name?.message || 'Errors!'}</ErrorPara>)}       
          </label>        
          
        <label>
            <Input
             {...register('email') }
            
              name="email"
              placeholder= 'Enter your email'
              type="email"
            />
             {errors?.email && (<ErrorPara>{errors?.email?.message || 'Errors!'}</ErrorPara>)}
          </label>
        
          <label>
          
            <PassInputWrap>
              <Input
              {...register('password') }
                
                name="password"
                placeholder= 'Create a password'
                type={visible ? 'text' : 'password'}
              />
               {errors?.password && (<ErrorPara>{errors?.password?.message || 'Errors!'}</ErrorPara>)}
              <HideBtn
                type="button"
                onClick={() => {
                  setVisible(!visible);
                }}
              >
               <Icon width={20}
                    height={20}
                    fillColor={'none'}
                    strokeColor={`#fff`}
                    name={"eye"}
                    />
              </HideBtn>
            </PassInputWrap>
           
          </label>
         
          <SubmitBtn type="submit"
            disabled={!isValid}> 
            
            Send
            
          </SubmitBtn>
      </FormUserInfo >  
    </Modal>
  )       

};

export default UserInfo;
