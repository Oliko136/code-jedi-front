import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const Button = styled.button`
  display: flex;
  gap: 4px;
  font-size:14px;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: 500;
  /* font-size: 14px; */
  letter-spacing: -0.02em;
  color: var(--additional-btn-bg-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: var(--accent-icon-hover-color);
  }
`;

export const ButtonSvg = styled.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
`;

export const StyledDatePickerContainer = styled.div`
  .react-datepicker {
    font-family: inherit;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--calendar-bg-color);
    border: 1px solid var(--additional-icon-color);
    border-radius: 8px;
    padding: 18px;
    width: 233px;
    height: 254px;
  }

  .react-datepicker-popper > svg {
    display: none;
  }

  .react-datepicker-popper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .react-datepicker__month-container {
    position: absolute;
    padding: 18px;
    width: 233px;
    height: 254px;
  }

  .react-datepicker__header {
    border: none;
    background-color: transparent;
    padding: 0;
  }

  .react-datepicker__month {
    margin: 0;
    margin-top: 11px;
  }

  .react-datepicker__current-month {
    padding-bottom: 14px;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: var(--btn-icon-color);
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 12px;
    border-top: 1px solid var(--calendar-additional-color-trans);
    padding-top: 14px;
  }

  .react-datepicker__day-name {
    display: inline-flex;
    color: var(--calendar-text-color-trans);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    margin: 0;
    width: 100%;
  }

  .react-datepicker__day {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    width: 22px;
    height: 22px;
    margin: 0;
    border-radius: 50%;
    color: var(--btn-icon-color);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .react-datepicker__day:hover,
  .react-datepicker__day:focus {
    background-color: var(--additional-btn-bg-hover-color);
    color: var(--calendar-secondary-hover-color);
  }

  .react-datepicker__day--disabled {
    color: var(--calendar-additional-color-trans);
  }

  .react-datepicker__day--outside-month {
    color: var(--calendar-additional-color-trans);
  }

  .react-datepicker__day--today {
    border-radius: 50%;
    text-align: center;
  }

  .react-datepicker__day--selected {
    background-color: var(--additional-btn-bg-hover-color);
    color: var(--calendar-secondary-hover-color);
    border-radius: 50%;
  }

  .react-datepicker__week {
    display: flex;
  }

  .react-datepicker__week > * {
    flex: 1;
    margin-right: 8px;
  }

  .react-datepicker__week > *:last-child {
    margin-right: 0;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: transparent;
  }

  .react-datepicker__navigation {
    cursor: pointer;
    position: absolute;
    top: 10px;
  }

  .react-datepicker__navigation-icon::before {
    border-color: var(--additional-icon-color);
    border-style: solid;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .react-datepicker__navigation:hover
    .react-datepicker__navigation-icon::before {
    border-color: var(--additional-text-color-op);
  }
`;
