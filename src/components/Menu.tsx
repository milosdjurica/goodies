import React from "react";
import ItemsWithHeader from "./ui/ItemsWithHeader";

export default function Menu() {
  return (
    <div className=" flex flex-col items-center justify-center space-y-4 rounded-lg border py-2">
      <h3 className="text-5xl underline">Meni</h3>
      <div className="w-full">
        <ItemsWithHeader />
        <ItemsWithHeader />
      </div>
    </div>
  );
}
