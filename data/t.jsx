import SignIn from "../client/src/components/authentication/signin";
import SignUp from "../client/src/components/authentication/signup";
import Cart from "../client/src/pages/Cart";
import Home from "../client/src/pages/Home";
import Author from "../client/src/pages/Manager/Author";
import User from "../client/src/pages/Manager/User";
import Revenue from "../client/src/pages/Revenue";
import Wallet from "../client/src/pages/Wallet";
import ResetPassword from "../client/src/components/authentication/resetpassword";
import OnlineLayout from "../client/src/components/onlineLayout";
// public routes
const publicRoutes = [
  {
    path: "/",

    component: OnlineLayout,
    layout: null,
  },
  {
    path: "/t",

    component: Home,
  },

  {
    path: "/manager-author",
    component: Author,
  },
  {
    path: "/reset-password",
    component: ResetPassword,
    layout: null,
  },
  {
    path: "/manager-user",
    component: User,
  },
  {
    path: "/signin",
    component: SignIn,
    layout: null,
  },
  {
    path: "/signup",
    component: SignUp,
    layout: null,
  },
  {
    path: "/revenue",
    component: Revenue,
  },

  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/wallet",
    component: Wallet,
  },
  {
    path: "/about",
    component: Wallet,
  },
];

const adminRoutes = [
  {
    path: "/",

    component: Home,
  },
];
const userRoutes = [
  {
    path: "/",

    component: Home,
  },
];

const employeeRoutes = [
  {
    path: "/",
    component: Home,
  },
];

export { publicRoutes, adminRoutes, userRoutes, employeeRoutes };
