import SignIn from '../components/auth/signin';
import SignUp from '../components/auth/signup';
import VisitorPage from '../pages/visitor';
import AdminPage from '../pages/admin';
import UserPage from '../pages/user';
import AuthorPage from '../pages/author';
import ManagerAuthor from '../components/layout/main/managerAuthor';
import ManagerUser from '../components/layout/main/managerUser';
import Home from '../components/layout/main/home';
import Cart from '../components/layout/main/cart';
import Wallet from '../components/layout/main/wallet';
import Revenue from '../components/layout/main/revenue';

//public routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/signin',
        component: SignIn,
    },
    {
        path: '/signup',
        component: SignUp,
    },
    {
        path: '/manager-user',
        component: ManagerUser,
    },
    {
        path: '/manager-author',
        component: ManagerAuthor,
    },
    {
        path: '/my-cart',
        component: Cart,
    },
    {
        path: '/my-wallet',
        component: Wallet,
    },
    {
        path: '/revenue',
        component: Revenue,
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
        path: '/',
        component: VisitorPage,
    },
    {
        path: '/admin',
        component: AdminPage,
    },
    {
        path: '/user',
        component: UserPage,
    },
    {
        path: '/author',
        component: AuthorPage,
    },
];

export { publicRoutes, privateRoutes };
