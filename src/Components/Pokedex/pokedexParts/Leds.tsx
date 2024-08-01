import Led from "@/Components/Utilities/Led";
import React from "react";
import Light from "../Light";

function Leds() {
  return (
    <>
      <Led />
      <div className="w-164 h-43.5 flex items-end justify-end">
        <Light color="red" />
        <Light color="#FFFF00" />
        <Light color="#DDFF00" />
      </div>
    </>
  );
}

export default Leds;
