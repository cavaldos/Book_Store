import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export const Notfound = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        width: "100vw",
        lineHeight: "1.5",
        flexDirection: "column",
      }}
    >
      <h1>404</h1>
      <h1>Notfound</h1>
      <h3 style={{color:'blue'}}>
        <Link to="/">Go to home</Link>
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Notfound);
