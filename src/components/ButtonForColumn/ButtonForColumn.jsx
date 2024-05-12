import { AddColumnButton, IconPlus } from './ButtonForColumn.styled';
import sprite from '../../../assets/svg/sprite.svg';

const ButtonForColumn = () => {
  return (
    <AddColumnButton type="button">
      <IconPlus>
        <use href={`${sprite}#plus`}></use>
      </IconPlus>
      Add another column
    </AddColumnButton>
  );
};

export default ButtonForColumn;