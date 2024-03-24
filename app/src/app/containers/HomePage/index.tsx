import React from "react";
import { NavBar } from "../../components/Navbar";
import { TopSection } from "./topSection";

export function HomePage() {
  return (
  <div className="flex flex-col items-center overflow-x-hidden w-full h-full">
    <NavBar />
    <TopSection />
    <p>This is home page</p>
  </div>);
}