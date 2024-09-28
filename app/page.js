'use client'
import DatePicker from './components/DatePicker';
import { DateProvider } from './context/DateContext';

export default function Home() {
  return (
    <DateProvider>
      <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <DatePicker/>
      </div>
    </DateProvider> 
  );
}

