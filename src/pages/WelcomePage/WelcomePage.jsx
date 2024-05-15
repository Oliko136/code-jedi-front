import {
  WelcomeBg,
  WelcomeLogo,
  AuthContainer,
  AuthARegister,
  AuthLogin,
} from './WelcomePage.styled';
import Lightning from './Logo';

import WelcomeImgTel1x from './WelcomeImages/welcome-mob-1x.png';
import WelcomeImgTel2x from './WelcomeImages/welcome-mob-2x.png';
import WelcomeImgTab1x from './WelcomeImages/welcome-tab-1x.png';
import WelcomeImgTab2x from './WelcomeImages/welcome-tab-2x.png';
import WelcomeImgDesktop1x from './WelcomeImages/welcome-desk-1x.png';
import WelcomeImgDesktop2x from './WelcomeImages/welcome-desk-2x.png';

const WelcomePage = () => {
  return (
    <WelcomeBg>
      <picture>
        <source
          media="(max-width: 375px)"
          srcSet={`${WelcomeImgTel1x} 1x, ${WelcomeImgTel2x} 2x`}
        />

        <source
          media="(max-width: 768px)"
          srcSet={`${WelcomeImgTab1x} 1x, ${WelcomeImgTab2x} 2x`}
        />

        <source
          media="(max-width: 1440px)"
          srcSet={`${WelcomeImgDesktop1x} 1x, ${WelcomeImgDesktop2x} 2x`}
        />

        <img src={WelcomeImgTel1x} alt="user" />
      </picture>

      <WelcomeLogo>
        <span>
          <Lightning width={15} height={20} fillColor={'#fff'} />
        </span>
        <h1>Task Pro</h1>
      </WelcomeLogo>

      <p>
        Supercharge your productivity and take control of your tasks with Task
        <br />
        Pro - Don't wait, start achieving your goals now!
      </p>

      <AuthContainer>
        <AuthARegister to="/auth/register">Registration</AuthARegister>
        <AuthLogin to="/auth/login">Log In</AuthLogin>
      </AuthContainer>
    </WelcomeBg>
  );
};

export default WelcomePage;
