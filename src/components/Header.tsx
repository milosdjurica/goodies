import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-7xl">Goodies</h1>
      <ModeToggle />
    </div>
  );
}
