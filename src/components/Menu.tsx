import React from "react";
import Item from "./Item";
import Buttons from "./Buttons";

export default function Menu() {
  return (
    <div className="m-2 flex flex-col items-center justify-center border">
      <h3>Menu</h3>
      {/* <Buttons /> */}
      <h4 className="text-start">Corn dog</h4>
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
