import Icon from 'components/Icon/Icon';
import DatePicker from 'react-datepicker';
import * as Styled from './Calendar.styled';
import { forwardRef } from 'react';

const Calendar = ({ date, changeDate }) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Styled.Button type="button" onClick={onClick} ref={ref}>
      {value}
      <Styled.ButtonSvg>
        <Icon name="chevron-down" />
      </Styled.ButtonSvg>
    </Styled.Button>
  ));

  const dateFormatChange = date => {
    if (!(date instanceof Date)) {
      return 'MMMM dd, yyyy';
    }
    const today = new Date();
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return "'Today', MMMM dd";
    } else {
      return 'EEEE, MMMM dd';
    }
  };

  return (
    <Styled.StyledDatePickerContainer>
      <Styled.CalendarDate>{dateFormatChange(date)}</Styled.CalendarDate>
      <DatePicker
        className="datePicker"
        selected={date}
        onChange={changeDate}
        minDate={new Date()}
        dateFormat={dateFormatChange(date)}
        customInput={<CustomInput />}
      />
    </Styled.StyledDatePickerContainer>
  );
};

export default Calendar;
