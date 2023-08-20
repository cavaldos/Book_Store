import React, { useEffect, useState } from "react";
import Price from "./chart/Price";
import Genre from "./chart/Genre";
import Rating from "./chart/Rating";
import Revenue from "./Charts";

function Revenues() {
  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <h1
          style={{
            backgroundColor: "#f0f2f5",
            textAlign: "center",
            width: "20%",
            margin: "10px auto",
            borderRadius: "10px",
            textTransform: "uppercase",
          }}
        >
          statistical
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "cencer",
            flexDirection: "column",
            padding: "0 20px",
          }}
        >
          {/* <Revenue /> */}
          <Price />
          <Genre />
          <Rating />
        </div>
      </div>
    </>
  );
}
export default Revenues;
