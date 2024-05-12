import { useSelector } from 'react-redux';
import { useState } from 'react';
import Icon from 'components/Icon/Icon';
 import Filter from "components/Filter/Filter.jsx";
// import { getFilter } from 'redux/filter/filter-selectors.js';
import { selectCurrentBoard } from '../../redux/boards/boards-selectors';
import {ContainerFilter,
    FilterDiv,
    FilterButton,
    TitleVilter,
    ContainerHeaderBoard,
    FilterText,
} from './HeaderDashboard.styled';
import Modal from 'components/Modal/Modal/Modal';

const HeaderDashboard = () => {
    const currentBoard = useSelector(selectCurrentBoard);
    const {title} = currentBoard;
    console.log(title)

     const [openFilter, setOpenFilter] = useState(false);
  // // const filter = useSelector(getFilter);

   const handleOpenFilter = () => {
    setOpenFilter(true);
  };

   const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

    return(
      <ContainerHeaderBoard>
        {/* <TitleVilter>{title}</TitleVilter> */}
        <TitleVilter>title</TitleVilter>
        <ContainerFilter>
    <FilterDiv>
        
       <FilterButton type="button" onClick={handleOpenFilter}>
        <Icon
            width={16}
           height={16}
            fillColor={'none'}
            strokeColor={"var(--additional-text-color)"}
             name={'filter'}
         />
          <FilterText>Filters</FilterText>
        </FilterButton>
      </FilterDiv>

       {openFilter && (
       <Modal open={openFilter} onClose={toggleFilter}>
          <Filter onClose={toggleFilter} />
       </Modal>
      )}

  
   </ContainerFilter>
      </ContainerHeaderBoard>
    )
}

export default HeaderDashboard