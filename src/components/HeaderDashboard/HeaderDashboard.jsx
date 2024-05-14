import { useSelector } from 'react-redux';
import { useState } from 'react';
import Icon from 'components/Icon/Icon';
 import Filter from "components/Filter/Filter.jsx";
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

     const [openFilter, setOpenFilter] = useState(false);

   const handleOpenFilter = () => {
    setOpenFilter(true);
  };

   const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

    return(
      <ContainerHeaderBoard>
        <TitleVilter>{title}</TitleVilter>
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