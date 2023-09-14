import React, { useState, useEffect } from 'react';
import { format, addDays, startOfWeek } from 'date-fns';

function HabitWeekCalendar() {
  const [currentWeek, setCurrentWeek] = useState<Date[]>([]);

  const getWeekDates = () => {
    const today = new Date();
    const start = startOfWeek(today, { weekStartsOn: 1 }); // 1 for Monday
    const week = Array.from({ length: 7 }, (_, index) => addDays(start, index));
    setCurrentWeek(week);
  };

  useEffect(() => {
    getWeekDates();

    // Refresh every midnight to get the next week's dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const timeUntilMidnight = +tomorrow - +today;
    const timer = setTimeout(() => getWeekDates(), timeUntilMidnight);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-8/12 border rounded-3xl py-6 px-5 mb-96' 
      style={{ backgroundColor: "#FCFEFF", borderColor: "#B6C8DA" }}
      >
      <div className='flex flex-row justify-between'>
          <div className='font-bold text-22 leading-8 not-italic'
            style={{ letterSpacing: '-0.44px' }}  
          >
            🧘‍♂️ <span className='ml-2'>Meditation</span>
          </div>
          <div className='not-italic leading-8 font-medium text-lg'
            style={{ letterSpacing: '-0.36px' }} 
          >
              Everyday
          </div>
      </div>
      <div className="flex justify-between mt-4">
        {currentWeek.map((date, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="font-bold text-base" style={{ color: "#2C4763" }} >{format(date, 'EEE')}</div>
            <div className="p-2 w-11 h-11 mt-2 border rounded-full flex items-center justify-center"
              style={{ borderColor: "#ADBCCB" }}  
            >
              <div className='text-xl leading-4 font-bold text-center' style={{ color: "#2C4763", letterSpacing: '-0.4px' }} >{format(date, 'dd')}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HabitWeekCalendar;
