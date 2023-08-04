import SignIn from "../components/authentication/signin";
import SignUp from "../components/authentication/signup";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Author from "../pages/Manager/Author";
import User from "../pages/Manager/User";
import Revenue from "../pages/Revenue";
import Wallet from "../pages/Wallet";
import ResetPassword from "../components/authentication/resetpassword";
import OnlineLayout from "../components/onlineLayout";
import ChatBot from "../util/chat";
import Profile from "../pages/Profile/profile";

// public routes
const publicRoutes = [
  {
    path: "/",
    component: OnlineLayout,
    layout: null,
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
    path: "/reset-password",
    component: ResetPassword,
    layout: null,
  },
  {
    path: "/whatrevenues",
    component: Revenue,
    layout: null,
  },
  {
    path: "/profile",
    component: Profile,
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
];

const userRoutes = [
  {
    path: "/",

    component: Home,
  },
  {
    path: "/user",

    component: Home,
  },
  {
    path: "/user/cart",
    component: Cart,
  },
  {
    path: "/user/wallet",
    component: Wallet,
  },
  {
    path: "/user/profile",
    component: Profile,
  },
];

const employeeRoutes = [
  {
    path: "/",
    component: Home,
  },
];

export { publicRoutes, userRoutes, employeeRoutes };
