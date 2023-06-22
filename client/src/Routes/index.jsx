import SignIn from "../components/auth/signin";
import SignUp from "../components/auth/signup";
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
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/signup",
    component: SignUp,
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
