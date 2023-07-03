import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { db } from '../../config/FirebaseConfig';
import {  getDoc } from 'firebase/firestore';

const DateFilter = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [todayTripData, setTodayTripData] = useState('');

  const handleDateRangeSelection = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const handleFilterData = () => {
    const { startDate, endDate } = dateRange[0];

    getDoc(db,'HomeData','2023-05-01').then((doc) => {
        if (doc.exists) {
          const data = doc.data().TodayTrip;
          setTodayTripData(data);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <DateRangePicker
        ranges={dateRange}
        onChange={handleDateRangeSelection}
      />
      <button className='m-4 p-2 bg-red-400 rounded-xl' onClick={handleFilterData}>Filter Data</button>
      <div>
        <span>Today's Trip: {todayTripData}</span>
      </div>
    </div>
  );
};

export default DateFilter;
