import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicke = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="flex flex-col items-center p-10">
      <p className="text-white">Selected Date: {selectedDate?.toDateString()}</p>
      <button
        className="flex flex-col items-center justify-center text-white py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
        onClick={toggleCalendar}
      >
        Open Calendar
      </button>
      {showCalendar && (
        <div className="relative mt-4">
          <DatePicker
            className="text-gray-600 rounded-sm font-medium text-center absolute left-1/2 transform -translate-x-1/2"
            selected={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      )}
    </div>
  );
};

export default Datepicke;
