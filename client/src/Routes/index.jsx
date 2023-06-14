import Home from "../pages/Home";
import Manager from "../pages/Manager";

//public routes

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/manager",
    component: Manager,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
