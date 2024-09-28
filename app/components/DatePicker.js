'use client'
import React, {useCallback} from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import DateSelector from './DateSelector';
import CustomizationOptions from './CustomizationOptions';
import CalendarPreview from './CalendarPreview';
import { useDateContext } from '../context/DateContext';
import Image from 'next/image';

const DatePicker = () => {
    const { startDate, endDate } = useDateContext();

    const renderPreview = useCallback(() => {
        return startDate ? <CalendarPreview /> : null;
      }, [startDate]);

  return (
    <div className="md:p-4 p-2 bg-white shadow rounded-lg text-blue-950 m-5 md:w-auto w-full">
      <div className='w-full bg-slate-200 rounded-lg p-3 font-bold text-2xl flex items-center justify-center'>
        <span className='text-blue-700'>Date</span><span className='text-blue-950'>picker</span>
        <Image src="/calendar.png" alt="My App Logo" width={30} height={30} priority/>
        </div>
      <h2 className="text-lg font-semibold m-2">Select Recurrence</h2>
      <RecurrenceOptions />
      <DateSelector />
      <CustomizationOptions />
      {renderPreview()} 
    </div>
  );
};

export default React.memo(DatePicker);

