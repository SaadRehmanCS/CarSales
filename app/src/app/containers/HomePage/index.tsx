import React from "react";
import { BookingCard } from "../../components/BookingCard";
import { NavBar } from "../../components/Navbar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { TopCars } from "./topCars";
import { TopSection } from "./topSection";

const Seperator = <div className="separator h-px bg-black w-3/5 my-4 mt-20"></div>

export function HomePage() {
  return (
  <div className="flex flex-col items-center overflow-x-hidden w-full h-full">
    <NavBar />
    <TopSection />
    <BookingCard />
    {Seperator}
    <BookingSteps />
    {Seperator}
    <AboutUs />
    {Seperator}
    <TopCars />
  </div>);
}