"use client";
import React, { useState, useRef } from "react";
import "../components/Booking1.css";
export default function Booking1() {
  const [firstClick, setFirstClick] = "false";
  const [hrInputValue, setHrInputValue] = useState("");
  const [minInputValue, setMinInputValue] = useState("");
  const hrInputRef = useRef(null);
  const minInputRef = useRef(null);
  let hrText = document.getElementById("hr-inp");
  let phr = document.getElementById("phr");

  function handleInputChange(event) {
    setHrInputValue(event.target.value);
  }

  function handleInputChange2(event) {
    setMinInputValue(event.target.value);
  }
  function bookHrClicked() {
    if (!hrInputValue) {
      alert ("Please input a valid description of your session")
    } else {
      alert(
        "Your request has been submitted successfully. Thanks for booking a session with us"
      );
      setHrInputValue("");
    }
    
  }
  function bookMinClicked() {
    if (!minInputValue) {
      alert ("Please input a valid description of your session")
    }
    alert(
      "Your request has been submitted successfully. Thanks for booking a session with us"
    )
    setMinInputValue("")
  }

  return (
    <>
      <div className="booking1">
        <p className="h">Select Appointment</p>
        <div className="box1">
          <div className="sec1">
            <span id="phr">
              {hrInputValue ? hrInputValue : "Example Service"}
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
              onChange={handleInputChange}
            />
          </div>
          <div className="sec2">
            <button className="book-hr" onClick={bookHrClicked}>
              Book
            </button>
          </div>
        </div>
        <div className="box2">
          <div className="sec1">
            <span id="pmin">
              {minInputValue ? minInputValue : "Example Service"}
            </span>
            <br />
            30 minutes <br />
            <input
              type="text"
              placeholder="Description of your service"
              className="inp"
              id="min-inp"
              ref={minInputRef}
              value={minInputValue}
              onChange={handleInputChange2}
            />
          </div>
          <div className="sec2">
            <button className="book-min" onClick={bookMinClicked}>
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
