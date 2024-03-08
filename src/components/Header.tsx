import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div className="mb-6 flex items-center justify-between border-b p-2">
      <h1 className="text-7xl">Goodies</h1>
      <ModeToggle />
    </div>
  );
}
