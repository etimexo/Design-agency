import React from 'react';
import "../components/Booking.css";
import Booking1 from './Booking1';
import Booking2 from './Booking2';

export default function Booking() {
  return (
    <div className='booking'>
      {/* <Booking1 /> */}
      <div className="booking1">
      <h1 className="sign-h">Signup and Schedule Your First Session with Gymian</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        veritatis corporis quas nemo similique <br />
        facere iure repellendus doloremque, tempora eos eveniet id facilis,{" "}
        <br /> cumque commodi sapiente quam pariatur amet molestias?
      </p>
    </div>
      <Booking2 />
    </div>
  )
}
