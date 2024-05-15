import Icon from '../../Icon/Icon';
import { Popup, BtnPop} from './MovePopUp.styled';

const MovePopUp = ({ allColumns, columnId, moveCard }) => {
    
  return (  

    
    <Popup id="move-popup">
        
      {allColumns
        .filter(column => column._id !== columnId)
        .map(column => {
          return (
            <BtnPop
              key={column._id}
              type="button"
              title={`${column.title}`}
              onClick={() => moveCard(column._id)}
             
            >
              <span> {column.title}</span>
              <Icon
                width={16}
                height={16}
                strokeColor={'var(--cart-text)'}
                fillColor={'none'}
                name={"broken-right"}
              />
            </BtnPop>
          );
        })}
    </Popup>
  );
};

export default MovePopUp;