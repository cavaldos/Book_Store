import React from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import Typography from "@material-ui/core/Typography";
function BreadC() {
  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSnippets.length - 1;
    return isLast ? (
      <Typography
        style={{
          fontSize: "20px",
          position: "absolute",
          textAlign: "center",
          top: "auto",
          bottom: "5px",
        }}
        key={url}
        color="textPrimary"
      >
        {pathSnippets[index]}
      </Typography>
    ) : (
      <Link key={url} color="inherit" href={url}>
        {pathSnippets[index]}
      </Link>
    );
  });

  return <Breadcrumbs aria-label="breadcrumb">{breadcrumbItems}</Breadcrumbs>;
}

export default BreadC;
