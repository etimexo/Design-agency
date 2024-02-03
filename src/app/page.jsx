import React from "react";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Other from "./components/Other";
import Cta from "./components/Cta";
import Newsletter from "./components/Newsletter";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Booking21 from "./components/Booking21";
import Booking1 from "./components/Booking1";
import Process from "./components/Process";

export default function page() {
  return (
    <body>
      <Welcome />
      <Services />
      <Other />
      <Cta />
      <Newsletter />
      <Footer  />
    </body>
  )
}
