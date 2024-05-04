import { useParams } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <>
      {/* Це лише заглушка. Можна буде прибрати/коригувати */}
      <h1>AuthPage</h1>
      {id === 'register' ? <RegisterForm /> : <LoginForm />}
    </>
  );
};

export default AuthPage;
