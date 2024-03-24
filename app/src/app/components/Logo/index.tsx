import React from "react";

const carLogo = require("../../../images/car-logo.png");

export function Logo() {
  return <div className="flex items-center h-14">
      <img src={carLogo} alt="car logo"/>
      <p className="text-xl text-black m-1 font-bold">Yourcar.</p>
  </div>
}
