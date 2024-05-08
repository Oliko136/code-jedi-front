import { useParams } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <>
        { id === 'register' ? <RegisterForm /> : <LoginForm />}
    </>
  );
};

export default AuthPage;
