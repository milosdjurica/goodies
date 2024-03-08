import React from "react";

export default function Item() {
  return (
    // ! Add width
    <div className="h-[300px] w-[350px] rounded-lg border">
      <p className="h-1/2 border">PICTURE</p>
      <div className="flex justify-between p-2">
        <h5>Name</h5>
        <h6>500 din</h6>
      </div>
      <p>Description</p>
    </div>
  );
}
