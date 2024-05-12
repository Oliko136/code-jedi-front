
import HeaderDashboard from 'components/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/MainDashboard/MainDashboard';
import {ContainerScreensPage} from './ScreenPage.styled'

const ScreensPage = () => {

  return(
    <ContainerScreensPage>
      <HeaderDashboard/>
      <MainDashboard/>
    </ContainerScreensPage>
 
  )
};

export default ScreensPage;
