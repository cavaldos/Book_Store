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
  
];

export default adminRoutes;
