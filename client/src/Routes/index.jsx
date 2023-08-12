import SignIn from "../components/authentication/signin";
import SignUp from "../components/authentication/signup";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ResetPassword from "../components/authentication/resetpassword";
import OnlineLayout from "../components/onlineLayout";
import ChatBot from "../utils/chat";
import Profile from "../pages/Profile/profile";
import Payment from "../pages/User/payment";
import MyOder from "../pages/User/myorder/myorder";
import ConfirmOrder from "../pages/Employee/confirmOrder";
import Paypal from "../components/paypal";
import Detailbook from "../components/Product/detail";
import Chat from "../utils/chat";
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
    path: "/profile",
    component: Profile,
  },

  {
    path: "/reset-password",
    component: ResetPassword,
    layout: null,
  },
  {
    path: `/detail-book/:id`,
    component: Detailbook,
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
    path: "/user/profile",
    component: Profile,
  },
  {
    path: "/user/cart/payment",
    component: Payment,
  },
  {
    path: "/user/myorder",
    component: MyOder,
  },
  {
    path: "/user/payment-paypal",
    component: Paypal,
  },
  {
    path: `/detail-book/:id`,
    component: Detailbook,
  },
  {
    path: "/chat",
    component: Chat,
  },
];

const employeeRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/employee",
    component: Home,
  },
  {
    path: "/employee/profile",
    component: Profile,
  },
  {
    path: "/employee/confirm-order",
    component: ConfirmOrder,
  },
  {
    path: `/detail-book/:id`,
    component: Detailbook,
  },
  {
    path: "/chat",
    component: Chat,
  },
];

export { publicRoutes, userRoutes, employeeRoutes };
