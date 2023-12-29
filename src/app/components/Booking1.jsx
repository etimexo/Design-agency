"use client"
import React from "react";
import { useState } from "react";
import "../components/Booking1.css";
import Booking2 from "./Booking2";
export default function Booking1() {
  const [initial, first] = useState(false)
  function onClick() {
    first(true)
  }

  return (
    <>
    {!initial && (
      <div className="booking1">
      <p className="h">Select Appointment</p>
      <div className="box1">
        <div className="sec1">
          feww
        </div>
        <div className="sec2">

        </div>
      </div>
      <div className="box2">
        <div className="sec1">
          feww
        </div>
        <div className="sec2">

        </div>
      </div>
      <button id="button" onClick={onClick}>Click</button>
    </div>
    )}
    {initial && <Booking2 />}
    </>
  );
}
