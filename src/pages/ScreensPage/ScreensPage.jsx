// import { FilterButton } from './ScreenPage.styled';
// import { useState } from 'react';
// import Modal from '../../components/Modal/FilterModal.jsx';
// import {  useSelector } from 'react-redux';
// import Icon from 'components/Icon/Icon';
// import Filter from "components/Filter/Filter.jsx";
// import { getFilter } from 'redux/filter/filter-selectors.js';
// import { FilterDiv, ContainerFilter } from './ScreenPage.styled';
import HeaderDashboard from 'components/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/MainDashboard/MainDashboard';

const ScreensPage = () => {

  return(
    <>
    <HeaderDashboard/>
<MainDashboard/>
    </>
 
  )

  // const AddBoardForm = () => {};

  // const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  //   const [openFilter, setOpenFilter] = useState(false);
  // // const filter = useSelector(getFilter);

  // const handleOpenFilter = () => {
  //   setOpenFilter(true);
  // };

  // const toggleFilter = () => {
  //   setOpenFilter(!openFilter);
  // };

  // return (
  //   <ContainerFilter>
  //     <FilterDiv>
  //       <div>CreatedBoard</div>
  //       <FilterButton type="button" onClick={handleOpenFilter}>
  //         <Icon
  //           width={20}
  //           height={20}
  //           fillColor={'none'}
  //           strokeColor={`#fff`}
  //           name={'filter'}
  //         />
  //         <p>Filter</p>
  //       </FilterButton>
  //     </FilterDiv>

  //     {openFilter && (
  //       <Modal open={openFilter} onClose={toggleFilter}>
  //         <Filter onClose={toggleFilter} />
  //       </Modal>
  //     )}

  //     {showModal && (
  //       <Modal closeModal={toggleModal}>
  //         <AddBoardForm handleClose={toggleModal} />
  //         <p color="white">MODAL WINDOW</p>
  //       </Modal>
  //     )}
  //   </ContainerFilter>
  // );
};

export default ScreensPage;
