import React from "react";
import { Card } from "../Card";

export default function ItemsWithHeader() {
  return (
    <>
      <h4 className="pl-8 text-start text-4xl underline">Corn dog</h4>
      <div className="flex min-w-full flex-wrap items-center justify-around">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
