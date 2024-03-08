import React from "react";
import Item from "./Item";
import Buttons from "./Buttons";

export default function Menu() {
  return (
    <div className=" flex flex-col items-center justify-center space-y-4 border">
      <h3 className="text-5xl underline">Menu</h3>
      {/* <Buttons /> */}
      {/* // ! create component for this Item+Header and add passing props and use GRID ---> NO FLEX */}
      <div className="w-full">
        <h4 className=" pl-8 text-start underline">Corn dog</h4>
        <div className="flex min-w-full flex-wrap items-center justify-around">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <div>
        <h4 className="pl-8 text-start underline">Ostalo</h4>
        <div className="flex min-w-full flex-wrap items-center justify-around">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}
