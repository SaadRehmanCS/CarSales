import React from "react";
import { NavBar } from "../../components/Navbar";

export function HomePage() {
  return (
  <div className="flex flex-col items-center overflow-x-hidden w-full h-full">
    <NavBar />
    <p>This is home page</p>
  </div>);
}