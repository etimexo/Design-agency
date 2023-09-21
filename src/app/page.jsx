import React from "react";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Other from "./components/Other";
import Cta from "./components/Cta";

export default function page() {
  return (
    <body>
      <Welcome />
      <Services />
      <Other />
      <Cta />
    </body>
  )
}
