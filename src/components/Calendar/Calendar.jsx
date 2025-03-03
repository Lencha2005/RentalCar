import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ selectedDate, onChange, className }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat="yyyy-MM-dd"
      minDate={new Date()} // Заборона вибору минулих дат
      placeholderText="Booking date"
      className={className}
      portalId="root"
    />
  );
};

export default Calendar;
