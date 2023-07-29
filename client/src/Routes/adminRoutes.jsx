import Wallet from "../pages/Wallet";
import ManagerUser from "../pages/Admin/user";
import ManagerProduct from "../pages/Admin/product";
const adminRoutes = [
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
    component: Wallet,
  },
  {
    path: "/admin/advertising",
    component: Wallet,
  },
];

export default adminRoutes ;