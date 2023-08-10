import ManagerUser from "../pages/Admin/user";
import ManagerProduct from "../pages/Admin/product";
import Home from "../pages/Home";
import Revenue from "../pages/Admin/Revenue";
import Detailbook from "../components/bookProduct/detailBook";
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
    path: "admin/revenue",

    component: Revenue,
  },

  {
    path: `/detail-book/:id`,
    component: Detailbook,
  }
];

export default adminRoutes;
