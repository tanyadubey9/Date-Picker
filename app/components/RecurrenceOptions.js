'use client'
import React from 'react'
import { useDateContext } from '../context/DateContext'

const RecurrenceOptions = () => {
    const {recurrence, setRecurrence} = useDateContext('');

    const options = ["Daily", "Weekly", "Monthly", "Yearly"];

  return (
    <div className='mb-4 mx-2'>
      <label className="block font-semibold">Recurrence:</label>
      <select value={recurrence} onChange={(e)=>setRecurrence(e.target.value)} className="border border-blue-950 rounded px-4 py-1.5">
        {options.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
      </select>
    </div>
  ) ;
}

export default React.memo(RecurrenceOptions);
