import React, { useEffect, useState } from "react";
import Price from "./chart/Price";
import Genre from "./chart/Genre";
import Rating from "./chart/Rating";
import Revenue from "./Charts";
function Revenues() {
  return (
    <>
      <h1> Revenue </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "cencer",
          flexDirection: "column",
          padding: "0 20px",
        }}
      >
        <Revenue />
        <Price />
        <Genre />
        <Rating />
      </div>
    </>
  );
}
export default Revenues;
