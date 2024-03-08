import React from "react";
import Item from "./Item";
import Buttons from "./Buttons";

export default function Menu() {
  return (
    <div className="m-2 flex flex-col items-center justify-center space-y-4 border">
      <h3>Menu</h3>
      {/* <Buttons /> */}
      {/* // ! create component for this Item+Header and add passing props and use GRID ---> NO FLEX */}
      <div>
        <h4 className=" text-start">Corn dog</h4>
        <div className="flex min-w-full flex-wrap items-center justify-around space-x-4">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <div>
        <h4 className="p-4 text-start">Other</h4>
        <div className="flex min-w-full flex-wrap items-center justify-around space-x-4">
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
