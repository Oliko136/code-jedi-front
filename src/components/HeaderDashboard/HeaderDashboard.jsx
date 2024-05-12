import { useSelector } from 'react-redux';
import { useState } from 'react';
import Icon from 'components/Icon/Icon';
 import Filter from "components/Filter/Filter.jsx";
// import { getFilter } from 'redux/filter/filter-selectors.js';
import { selectCurrentBoard } from '../../redux/boards/boards-selectors';
import {ContainerFilter,
    FilterDiv,
    FilterButton,
} from './HeaderDashboard.styled';
import Modal from 'components/Modal/Modal/Modal';

const HeaderDashboard = () => {
    const currentBoard = useSelector(selectCurrentBoard);
    const {title} = currentBoard;

//     const [showModal, setShowModal] = useState(false);
//    const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

     const [openFilter, setOpenFilter] = useState(false);
  // // const filter = useSelector(getFilter);

   const handleOpenFilter = () => {
    setOpenFilter(true);
  };

   const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

    return(
      <div>
        <h4>{title}</h4>

        <ContainerFilter>
    <FilterDiv>
        
       <FilterButton type="button" onClick={handleOpenFilter}>
        <Icon
            width={20}
           height={20}
            fillColor={'none'}
            strokeColor={`#fff`}
             name={'filter'}
         />
          <p>Filter</p>
        </FilterButton>
      </FilterDiv>

       {openFilter && (
       <Modal open={openFilter} onClose={toggleFilter}>
          <Filter onClose={toggleFilter} />
       </Modal>
      )}

  
   </ContainerFilter>
      </div>
    )
}

export default HeaderDashboard