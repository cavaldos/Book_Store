import React from "react";

import Login from "../components/login";
import VisitorPage from "../pages/visitor";
import AdminPage from "../pages/admin";
import UserPage from "../pages/user";
import AuthorPage from "../pages/author";
//public routes

const publicRoutes = [
  {
    path: "/",
    component: VisitorPage,
  },
  {
    path: "/login",
    component: Login,
  },
];
const privateRoutes = [
  {
    path: "/",
    component: VisitorPage,
  },
  {
    path: "/admin",
    component: AdminPage,
  },
  {
    path: "/user",
    component: UserPage,
  },
  {
    path: "/author",
    component: AuthorPage,
  },
];

export { publicRoutes, privateRoutes };
