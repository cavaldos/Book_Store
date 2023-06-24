import SignIn from "../components/auth/signin";
import SignUp from "../components/auth/signup";
import VisitorPage from "../pages/visitor";
import AdminPage from "../pages/admin";
import UserPage from "../pages/user";
import AuthorPage from "../pages/author";
import ManagerAuthor from "../components/layout/main/managerAuthor";
import ManagerUser from "../components/layout/main/managerUser";
import Home from "../components/layout/main/home";
//public routes
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/manager-user",
    component: ManagerUser,
  },
  {
    path: "/manager-author",
    component: ManagerAuthor,
  },
];

// const PublicRouter=()=>{
//     return(
//         <>
//         <Route path="/signin" component={SignIn} />
//         <Route path="/signup" component={SignUp} />
//         </>
//     )
// }

const privateRoutes = [
  {
    path: "/",
    component: VisitorPage,
  },
  {
    path: "/admin",
    component: AdminPage,
  },
  {
    path: "/user",
    component: UserPage,
  },
  {
    path: "/author",
    component: AuthorPage,
  },
];

export { publicRoutes, privateRoutes };
