import ManagerUser from "../pages/Admin/userManager/user";
import ManagerProduct from "../pages/Admin/productManager/product";
import Home from "../pages/Home";
import Revenue from "../pages/Admin/Revenue";
import Detailbook from "../components/Product/detail";
import AddUser from "../pages/Admin/userManager/option/addUser";
import Profile from "..//pages//Profile//profile";
import DefaultLayout from "../components/main";
const adminRoutes = [
  {
    path: "/",

    component: Home,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "/admin",

    component: Home,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "/admin/manage-user",

    component: ManagerUser,
    DefaultLayout: DefaultLayout,
  },

  {
    path: "admin/product",

    component: ManagerProduct,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "admin/revenue",

    component: Revenue,
    DefaultLayout: DefaultLayout,
  },

  {
    path: `/detail-book/:id`,
    component: Detailbook,
    DefaultLayout: DefaultLayout,
  },
  {
    path: `/admin/adduser`,
    component: AddUser,
    DefaultLayout: DefaultLayout,
  },
  {
    path: `/admin/profile`,
    component: Profile,
    DefaultLayout: DefaultLayout,
  },
];

export default adminRoutes;
