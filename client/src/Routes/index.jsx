import React from "react";

import Login from "../components/login";
import VisitorPage from "../pages/visitor";
import AdminPage from "../pages/admin";
import UserPage from "../pages/user";
import AuthorPage from "../pages/author";
import Signup from "../components/signup"
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
  {
    path: "/signup",
    component: Signup,
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
