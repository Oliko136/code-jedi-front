import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
// import { useAuth } from 'hooks';
import  loginSchema  from '../../schemas/loginSchema';
// import SmallLoader from 'components/Loader/SmallLoader';
import {
  Background,
  AuthList,
  AuthLink,
  FormUi,
  Input,
  SubmitBtn,
  ErrorPara,
  PassInputWrap,
  HideBtn, 
} from '../RegisterForm/RegisterForm.styled';
import {FormWrapLog} from './LoginForm.styled'
import Icon from '../../Icon/Icon';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"



const LoginForm = () => {
  
  const [visible, setVisible] = useState(false);
 
  const dispatch = useDispatch();
//   const { isLoading } = useAuth();

  const submit = async (evt) => {
    console.log(evt.email,'qwe' );
    
    const formData = {
          email: evt.email,
          password: evt.password,
        };
        console.log(formData)
        const isValid = await loginSchema.isValid(formData);            

          if (!isValid) {
            return;
           }
           
        dispatch(logIn({ ...formData }))
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
    resolver:yupResolver(loginSchema)
  })
  
// const iconEye = visible ? "eye" :  "icon-plus";

  return (
    <Background>
      <FormWrapLog>
        <AuthList>
          <li>
            <AuthLink to={`/auth/register`}>Registration</AuthLink>
          </li>
          <li>
            <AuthLink to={`/auth/login`}>Log In</AuthLink>
          </li>
        </AuthList>

        <FormUi onSubmit={handleSubmit(submit)} autoComplete="off">
         
          
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
            
            Log In Now
            
          </SubmitBtn>
        </FormUi>
      </FormWrapLog>
    </Background>
  );
};

export default LoginForm;

