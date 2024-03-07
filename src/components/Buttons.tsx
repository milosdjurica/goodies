import React from "react";
import { Button } from "./ui/button";

export default function Buttons() {
  return (
    <div className="space-x-2">
      <Button variant="secondary">All</Button>
      <Button variant="secondary">Corn dog</Button>
      <Button variant="secondary">Chicken</Button>
      <Button variant="secondary">Salads</Button>
      <Button variant="secondary">Other</Button>
    </div>
  );
}
