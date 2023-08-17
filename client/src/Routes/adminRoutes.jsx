import ManagerUser from "../pages/Admin/userManager/user";
import ManagerProduct from "../pages/Admin/productManager/product";
import Home from "../pages/Home";
import Revenue from "../pages/Admin/Revenue";
import Detailbook from "../components/Product/detail";
import AddUser from "../pages/Admin/userManager/addUser";
import Profile from "..//pages//Profile//profile";
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
  },
  {
    path: `/admin/adduser`,
    component: AddUser,
  },
  {
    path: `/admin/profile`,
    component: Profile,
  }
];

export default adminRoutes;
