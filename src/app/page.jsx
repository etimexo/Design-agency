import React from "react";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import './components/Welcome.css';

export default function page() {
  return (
    <body>
      <Welcome />
      <Services />
    </body>
  )
}
