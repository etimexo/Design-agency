import React from "react";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Other from "./components/Other";

export default function page() {
  return (
    <body>
      <Welcome />
      <Services />
      <Other />
    </body>
  )
}
