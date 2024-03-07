import React from "react";

export default function Item() {
  return (
    // ! Add width
    <div className="h-[350px] w-[350px] border border-red-600">
      <p>PICTURE</p>
      <h5>Name</h5>
      <h6>Price</h6>
      <p>Description</p>
    </div>
  );
}
