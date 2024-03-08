import React from "react";
import Item from "./Item";
import Buttons from "./Buttons";
import ItemsWithHeader from "./ui/ItemsWithHeader";

export default function Menu() {
  return (
    <div className=" flex flex-col items-center justify-center space-y-4 border">
      <h3 className="text-5xl underline">Menu</h3>
      {/* <Buttons /> */}
      {/* // ! create component for this Item+Header and add passing props and use GRID ---> NO FLEX */}
      <div className="w-full">
        {/* //! Props with items and header */}
        <ItemsWithHeader />
        <ItemsWithHeader />
      </div>
    </div>
  );
}
