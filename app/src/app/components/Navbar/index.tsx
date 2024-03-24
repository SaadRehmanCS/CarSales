import React from "react";
import { Logo } from "../Logo";
import { NavItems } from "./navItems";

export function NavBar() {
  return <div className="w-full max-w-screen-2xl flex flex-row items-center lg:pl-12 lg:pr-12 justify-between">
    <Logo />
    <NavItems />
  </div>
}