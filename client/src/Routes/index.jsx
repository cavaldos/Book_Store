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
import VerificationEmail from '../components/authentication/verificationemail';
import RenderAvatar from "../components/avatar/avatar";
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
  {
    path: '/verification-email',
    component: VerificationEmail,
    layout: null,
  },
  {
    path: '/avatar',
    component: RenderAvatar,
    layout: null,
  },
];

const adminRoutes = [
  {
    path: "/",

    component: Wallet,
  },
  {
    path: "/dashboard",

    component: Wallet,
  },
  {
    path: "/manager",

    component: Wallet,
  },
  {
    path: "/signin",
    component: SignIn,
    layout: null,
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
