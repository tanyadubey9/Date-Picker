'use client'
import React, {useState, useEffect} from 'react'
import { useDateContext } from '../context/DateContext'

const CustomizationOptions = () => {
    const { recurrence, customization, setCustomization} = useDateContext();
    const [interval, setInterval] = useState(() => {
      if (typeof window !== 'undefined') {
        const savedInterval = localStorage.getItem('interval');
        return savedInterval ? Number(savedInterval) : '';
      }
      return '';  
    });

    useEffect(() => {
        setCustomization((prev) => ({ ...prev, interval }));
        if (interval) {
          localStorage.setItem('interval', interval);
        }
      }, [interval, setCustomization]);

  return (
    <div className='mb-4'>
        <label className="block font-semibold">
            {recurrence.toLowerCase()} Interval:
        </label>
        <input type="number" value={interval} onChange={(e) => setInterval(e.target.value)} className="border border-blue-950 rounded-lg px-2 py-1" placeholder='Enter Interval' />
    </div>
  )
}

export default React.memo(CustomizationOptions);
