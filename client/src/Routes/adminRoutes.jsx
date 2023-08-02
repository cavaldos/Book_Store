import Wallet from "../pages/Wallet";
import ManagerUser from "../pages/Admin/user";
import ManagerProduct from "../pages/Admin/product";
import Home from "../pages/Home";

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
    path: "/admin/manage-user",

    component: ManagerUser,
  },

  {
    path: "admin/product",

    component: ManagerProduct,
  },
  {
    path: "/admin/wallet",

    component: Wallet,
  },
  {
    path: "/admin/revenue",
    component: Wallet,
  },
  {
    path: "/admin/advertising",
    component: Wallet,
  },
];

export default adminRoutes;
