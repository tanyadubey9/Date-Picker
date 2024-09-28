'use client'
import React from 'react'
import { useDateContext } from '../context/DateContext';
import ReactCalendar from 'react-calendar';     
import 'react-calendar/dist/Calendar.css';

const DateSelector = () => {
    const {startDate, setStartDate, endDate, setEndDate} = useDateContext();

  return (
    <div className='mb-4 flex flex-col bg-blue-300 rounded-lg p-2 md:justify-around justify-center items-center pb-6 md:flex-row w-full'>
        <div className='bg-blue-100 p-2 rounded-lg size-11/12 mb-2 flex flex-col items-center md:items-start'>
      <label className="block font-semibold m-2">Select Start Date:</label>
      <ReactCalendar value={startDate} onChange={setStartDate} className="rounded-lg border text-sm font-semibold md:text-base md:font-normal" />
      </div>
      <div className='bg-blue-100 p-2 rounded-lg size-11/12 mb-2 flex flex-col items-center md:items-start'>
      <label className="block font-semibold m-2">Select End Date (optional):</label>
      <ReactCalendar value={endDate} onChange={setEndDate} className="rounded border text-sm font-semibold md:text-base md:font-normal" />
      </div>
    </div>
  )
}

export default React.memo(DateSelector);
