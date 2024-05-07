//import Loader from 'components/Loader/Loader';
import {
  ErrorContainer,
  FourFirst,
  NotFoundBG,
  ZeroNum,
  FourSecond,
  GoHomeButton,
  NotFoundText,
  GoLoginButton,
  Or,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFoundBG>
      {/* <Loader /> */}
      {/* Це лише заглушка. Можна буде прибрати/коригувати */}

      <ErrorContainer>
        <FourFirst>
          <p>4</p>
        </FourFirst>

        <ZeroNum>
          <p>0</p>
        </ZeroNum>

        <FourSecond>
          <p>4</p>
        </FourSecond>
      </ErrorContainer>
      <NotFoundText>
        Oh no! Sorry, this page is down or doesn`t exist, please try again later
      </NotFoundText>

      <GoHomeButton to="/home">Go home</GoHomeButton>
      <Or>OR</Or>
      <GoLoginButton to="/welcome">Go Log in / Registration</GoLoginButton>
    </NotFoundBG>
  );
};

export default NotFoundPage;
