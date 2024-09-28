"use client";
import { useDateContext } from '../context/DateContext';
import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';

const CalendarPreview = () => {
  const { startDate, endDate, recurrence, customization } = useDateContext();
  const [previewDates, setPreviewDates] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedDates = localStorage.getItem('previewDates');
      setPreviewDates(savedDates ? JSON.parse(savedDates) : []);
    }
  }, []);

  useEffect(() => {
    if (!startDate || !recurrence || !customization.interval) {
      setPreviewDates([]);
      return;
    }

    const dates = [];
    let current = dayjs(startDate);
    const end = endDate ? dayjs(endDate) : null;

    let limit = 10; 
    while (!end || current.isBefore(end)) {
      if (limit <= 0) break;
      dates.push(current.format('DD-MM-YYYY'));
      switch (recurrence) {
        case 'Daily':
          current = current.add(customization.interval, 'day');
          break;
        case 'Weekly':
          current = current.add(customization.interval, 'week');
          break;
        case 'Monthly':
          current = current.add(customization.interval, 'month');
          break;
        case 'Yearly':
          current = current.add(customization.interval, 'year');
          break;
        default:
          return;
      }
      limit--;
    }
    setPreviewDates(dates);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('previewDates', JSON.stringify(dates));
    }
  }, [startDate, endDate, recurrence, customization.interval]);

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2 px-2">Preview:</h3>
      <ul>
        {previewDates.length === 0 && <li>No dates selected</li>}
        {previewDates.map((date, index) => (
          <li key={index} className="px-2 py-1.5 bg-slate-200 my-1 rounded-lg">
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(CalendarPreview);
