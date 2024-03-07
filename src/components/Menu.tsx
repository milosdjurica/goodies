import React from "react";
import { Button } from "./ui/button";
import Item from "./Item";

export default function Menu() {
  return (
    <div className="m-2 flex flex-col items-center justify-center border">
      <h3>Menu</h3>
      <div className="">
        <Button variant="secondary">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="secondary">Button</Button>
      </div>
      <div className="flex min-w-full flex-wrap items-center justify-around">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
