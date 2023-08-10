import React, { useEffect, useState } from "react";
import Price from "./chart/Price";
import Genre from "./chart/Genre";
import Rating from "./chart/Rating";

function Revenue() {
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
        <Price />
        <Genre />
        <Rating />
      </div>
    </>
  );
}
export default Revenue;
