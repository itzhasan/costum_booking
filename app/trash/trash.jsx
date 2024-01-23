// TimeSelectionForm.js
import React, { useState } from 'react';
import daysAndTimes from './daysAndTimes';

const TimeSelectionForm = () => {
  const [selectedTimes, setSelectedTimes] = useState({});

  const handleTimeChange = (day, field, value) => {
    setSelectedTimes((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };

  return (
    <div>
      {daysAndTimes.map((dayAndTime) => (
        <div key={dayAndTime.id}>
          <label>{dayAndTime.day}:</label>
          <div>
            <span>Start Time:</span>
            <input
              type="text"
              value={selectedTimes[dayAndTime.day]?.startTime || ''}
              onChange={(e) => handleTimeChange(dayAndTime.day, 'startTime', e.target.value)}
            />
          </div>
          <div>
            <span>End Time:</span>
            <input
              type="text"
              value={selectedTimes[dayAndTime.day]?.endTime || ''}
              onChange={(e) => handleTimeChange(dayAndTime.day, 'endTime', e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSelectionForm;
