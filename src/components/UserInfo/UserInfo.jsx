import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { updateUserAvatar, updateUserInfo } from '../../redux/auth/auth-operations';
import  registerSchema  from '../../schemas/registerSchema';
// нужен Loader на кнопку?
// import SmallLoader from 'components/Loader/SmallLoader';
import {
  SubmitBtnInfo,
  FormUserInfo,
  AddPhoto,
  AvatarEdit,
  Avatar,
  PlusButton,
  Input,
  LabelWrap,
  TitleInfo,
} from './UserInfo.styled';
import {
  ErrorPara,
  HideBtn,
} from '../RegisterForm/RegisterForm.styled';
import Icon from '../Icon/Icon';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Modal from '../Modal/Modal/Modal';
import { selectUser } from '../../redux/auth/auth-selectors';

const UserInfo = ({showModal}) => {
  const user = useSelector(selectUser)
const {name, email,password, avatar} = user
  const [visible, setVisible] = useState(false);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  // const { isLoading } = useAuth();

  function changeImg(event) {
    const avatarNew = event.target.files[0]
    // console.log(event)
    const file = new FileReader();
    file.onload = function () {
      setPreview(file.result);
    };
    file.readAsDataURL(avatarNew);
setValue("avatar", [avatarNew])
  }

  const submit = async evt => { 
    const formData = {
      name: evt.name,
      email: evt.email,
      password: evt.password,
    };
    const hasAvatar = evt.avatar.length > 0
    if (hasAvatar) {
      dispatch(updateUserAvatar(evt.avatar[0]))
    }
    const isValid = await registerSchema.isValid(formData);

          if (!isValid) {
            return;
           }
           
        dispatch(updateUserInfo({ ...formData }))
        // await new Promise(res => setTimeout(res, 500));
  }

  const {register, handleSubmit, setValue, formState:{errors, isValid}  } = useForm({
    initialValues: {
             name: '',
            email: '',
            password: '',
            // avatar: avatar,
          },
    mode: "onBlur",
    resolver:yupResolver(registerSchema)
  })

  return (
    
    <Modal width={335} height={440} onClose={() => showModal(false)}>

      <TitleInfo>Edit profile</TitleInfo>
      <FormUserInfo onSubmit={handleSubmit(submit)}>
        <Avatar>
          <AvatarEdit>
              {avatar !== 'avatar/standartAvatar.png' || !!preview  ? (
                <img
                  src={preview || avatar}
                  alt="avatar"
                  style={{ width: 68, height: 68, objectFit: 'cover' }}
                />
              ) : (
                <Icon width={68}
                height={68}
                fillColor={'var(--icon-user)'}
                strokeColor={'var(--icon-user)'}
                name={"user-avatar"}
                />
              )}
              <PlusButton>
                <Icon width={10}
                      height={10}
                      fillColor={'none'}
                      strokeColor={'#161616'}
                      name={"icon-plus"}
                      />
                <AddPhoto
                {...register('avatar' )}
                  type="file"
                  name= "avatar"
                  accept=".png, .jpg, .jpeg"
                  onChange={changeImg}
                />
              </PlusButton>
           </AvatarEdit>
        </Avatar>      

         <LabelWrap>
             <Input 
             {...register('name',{value: name} )}
              name="name"
              placeholder={name}
            />
            {errors?.name && (<ErrorPara>{errors?.name?.message || 'Errors!'}</ErrorPara>)}       
          </LabelWrap>        
          
        <LabelWrap>
            <Input
             {...register('email', {value: email}) }
              name="email"
              placeholder= {email}
              type="email"
            />
             {errors?.email && (<ErrorPara>{errors?.email?.message || 'Errors!'}</ErrorPara>)}
          </LabelWrap> 
       
              <LabelWrap>
                <Input
                {...register('password', {value: password}) }
                  name="password"
                  placeholder= "password"
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
                      strokeColor={`var(--icon-color)`}
                      name={"eye"}
                      />
                </HideBtn>
              </LabelWrap>
         
          <SubmitBtnInfo type="submit"
            disabled={!isValid}> 
            Send
          </SubmitBtnInfo>
      </FormUserInfo >  
    </Modal>
  
            
      
      
    
    
    
  )       

 
};

export default UserInfo;
