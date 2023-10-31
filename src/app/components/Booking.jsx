import React from 'react';
import "../components/Booking.css";
import Booking1 from './Booking1';
import Booking2 from './Booking2';

export default function Booking() {
  return (
    <div className='booking'>
      <Booking1 />
      <Booking2 />
    </div>
  )
}
