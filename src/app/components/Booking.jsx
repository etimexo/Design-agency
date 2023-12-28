import React from "react";
import "../components/Booking.css";
import Booking1 from "./Booking1";
import Booking2 from "./Booking2";
import Footer from "./Footer";

export default function Booking() {
  return (
    <>
      <div className="booking">
        {/* <Booking1 /> */}
        <div className="row">
          <div className="col1">
            <div className="booking1">
              <h1 className="sign-h">
                Signup and Schedule <br />
                Your First Session with Gymian
              </h1>
              <p className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat veritatis corporis quas nemo similique facere iure
                repellendus doloremque, tempora eos eveniet id facilis.
              </p>
            </div>
          </div>
          <div className="col2">
            
          </div>
        </div>

        {/* <Booking2 /> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}
