"use client";
import React from "react";
import { useState } from "react";
import "../components/Booking1.css";
import Booking2 from "./Booking2";
import { stringify } from "postcss";
export default function Booking1() {
  const [initial, first] = useState(false);
  function onClick() {
    first(true);
  }
  
  let hrText = document.getElementsByClassName("inp")
  function hrclicked() {
    alert(stringify(hrText.value))
  }

  return (
    <>
      {!initial && (
        <div className="booking1">
          <p className="h">Select Appointment</p>
          <div className="box1">
            <div className="sec1">
              Example Service <br />
              1 hour <br />
              <input
                type="text"
                placeholder="Description of your service"
                className="inp"
                // value={hr-value}
              /> <button className="ok-hr" onClick={hrclicked}>OK</button>
            </div>
            <div className="sec2">
            <button className="book-hr">Book</button>

            </div>
          </div>
          <div className="box2">
            <div className="sec1">
              Example Service <br />
              30 minutes <br />
              <input
                type="text"
                placeholder="Description of your service"
                className="inp"
              /> <button className="ok-min">OK</button>
            </div>
            <div className="sec2">
            <button className="book-min">Book</button>
            </div>
          </div>
          <button id="button" onClick={onClick}>
            Click
          </button>
        </div>
      )}
      {initial && <Booking2 />}
    </>
  );
}
