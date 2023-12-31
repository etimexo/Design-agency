"use client";
// import React from "react";
// import { useState } from "react";
// import useRef from "react"
import React, { useState, useRef } from "react";
import "../components/Booking1.css";
import Booking2 from "./Booking2";
export default function Booking1() {
  const [initial, first] = useState(false);
  const [hrInputValue, setHrInputValue] = useState("")
  const hrInputRef = useRef(null);

  function onClick() {
    first(true);
  }

  let hrText = document.getElementById("hr-inp");
  let phr = document.getElementById("phr")
  // function hrclicked() {
  //   alert(hrText.value)
  // }
  function hrclicked() {
    // alert(hrInputRef.current.value);
    // phr.innerText = hrInputRef.current.value
    // alert(setHrInputValue)
  }

  return (
    <>
      {!initial && (
        <div className="booking1">
          <p className="h">Select Appointment</p>
          <div className="box1">
            <div className="sec1">
              <span id="phr" ref={phr}>
                Example Service
              </span>
              <br />
              1 hour <br />
              <input
                type="text"
                placeholder="Description of your service"
                className="inp"
                id="hr-inp"
                ref={hrInputRef}
                value={hrInputValue}
              />{" "}
              <button className="ok-hr" onClick={hrclicked}>
                OK
              </button>
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
                id="min-inp"
              />{" "}
              <button className="ok-min">OK</button>
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
