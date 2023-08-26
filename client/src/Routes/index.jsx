import SignIn from "../components/authentication/signin";
import SignUp from "../components/authentication/signup";
import Cart from "../pages/User/Cart";
import Home from "../pages/Home";
import ResetPassword from "../components/authentication/resetpassword";
import OnlineLayout from "../components/onlineLayout";

import Profile from "../pages/Profile/profile";
import Payment from "../pages/User/payment";
import MyOder from "../pages/User/myorder/myorder";
import ConfirmOrder from "../pages/Employee/confirmOrder";
import Paypal from "../components/paypal";
import Detailbook from "../components/Product/detail";
import Chat from "../utils/chat";
import BookPay from "../pages/BookPay";
import ClientPage from "../components/ClientPage";
import DefaultLayout from "../components/main";
// public routes
const publicRoutes = [
  {
    path: "/",
    component: OnlineLayout,
    DefaultLayout: DefaultLayout,
    layout: null,
  },
  {
    path: "/signin",
    component: SignIn,
    DefaultLayout: DefaultLayout,
    layout: null,
  },
  {
    path: "/signup",
    component: SignUp,
    DefaultLayout: DefaultLayout,
    layout: null,
  },
  {
    path: "/reset-password",
    component: ResetPassword,
    DefaultLayout: DefaultLayout,
    layout: null,
  },
  {
    path: "/profile",
    component: Profile,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "/reset-password",
    component: ResetPassword,
    DefaultLayout: DefaultLayout,
    layout: null,
  },
  {
    path: `/detail-book/:id`,
    component: Detailbook,
    DefaultLayout: DefaultLayout,
  },
  {
    path: `/signup-account-payment`,
    component: BookPay,
    DefaultLayout: DefaultLayout,
    layout: null,
  },
];

const userRoutes = [
  {
    path: "/",

    component: Home,
  
    DefaultLayout: ClientPage,
  },
  {
    path: "/user",

    component: Home,
    DefaultLayout: ClientPage,
  },
  {
    path: "/user/cart",
    component: Cart,
    DefaultLayout: ClientPage,
  },
  {
    path: "/user/profile",
    component: Profile,
    DefaultLayout: ClientPage,
  },
  {
    path: "/user/cart/payment",
    component: Payment,
    DefaultLayout: ClientPage,
  },
  {
    path: "/user/mylistorder",
    component: MyOder,
    DefaultLayout: ClientPage,
  },
  {
    path: "/user/payment-paypal",
    component: Paypal,
    DefaultLayout: ClientPage,
  },
  {
    path: `/detail-book/:id`,
    component: Detailbook,
    DefaultLayout: ClientPage,
  },

  {
    path: `/create-account-payment`,
    component: BookPay,
    layout: null,
  },
];

const employeeRoutes = [
  {
    path: "/",
    component: Home,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "/employee",
    component: Home,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "/employee/profile",
    component: Profile,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "/employee/confirm-order",
    component: ConfirmOrder,
    DefaultLayout: DefaultLayout,
  },
  {
    path: `/detail-book/:id`,
    component: Detailbook,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "/chat",
    component: Chat,
    DefaultLayout: DefaultLayout,
  },
];

export { publicRoutes, userRoutes, employeeRoutes };
