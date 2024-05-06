import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/auth-operations';
// хук на useSelector
// import { useAuth } from 'hooks';
import  registerSchema  from '../RegisterForm/registerSchema';
// нужен Loader на кнопку?
// import SmallLoader from 'components/Loader/SmallLoader';
import {
    FormUserInfo
  
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



const UserInfo = () => {
  
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  // const { isLoading } = useAuth();

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
           
        dispatch(registerThunk({ ...formData }))
        // await new Promise(res => setTimeout(res, 500));
    reset();
  }

  const {register, handleSubmit,  reset, formState:{errors, isValid}  } = useForm({
    initialValues: {
             name: '',
            email: '',
            password: '',
          },
    mode: "onBlur",
    resolver:yupResolver(registerSchema)
  })


return(
    <div>
        <h3>Edit  profile</h3>
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
    </div>
)
  
       
          

          

};

export default UserInfo;
