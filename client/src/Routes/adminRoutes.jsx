import Wallet from "../pages/Wallet";
import ManagerUser from "../pages/Admin/user";
import ManagerProduct from "../pages/Admin/product";
import Home from "../pages/Home";
import Revenue from "../pages/Revenue";

const adminRoutes = [
  {
    path: "/",

    component: Home,
  },
  {
    path: "/admin",

    component: Home,
  },
  {
    path: "/admin/user",

    component: ManagerUser,
  },
  {
    path: "/admin/employee",

    component: Wallet,
  },
  {
    path: "/admin/product",

    component: ManagerProduct,
  },
  {
    path: "/admin/wallet",

    component: Wallet,
  },
  {
    path: "/admin/revenue",
    component: Revenue,
  },
  {
    path: "/admin/advertising",
    component: Wallet,
  },
];

export default adminRoutes ;