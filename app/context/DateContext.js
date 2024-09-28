'use client';
import React, { createContext, useContext, useState} from 'react';

const DateContext = createContext();
export const useDateContext = () => useContext(DateContext);

export const DateProvider = ({children}) => {
  const [recurrence, setRecurrence] = useState('Daily');
  const [customization, setCustomization] = useState({interval: 1, days: []});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  return (
    <DateContext.Provider value={{recurrence, setRecurrence, customization, setCustomization, startDate, setStartDate, endDate, setEndDate}}> 
    {children} 
    </DateContext.Provider>
  )
}
