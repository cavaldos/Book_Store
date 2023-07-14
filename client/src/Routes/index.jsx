import SignIn from '../components/authentication/signin';
import SignUp from '../components/authentication/signup';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Author from '../pages/Manager/Author';
import User from '../pages/Manager/User';
import Revenue from '../pages/Revenue';
import ResetPassword from '../components/authentication/resetpassword';
// public routes
const publicRoutes = [
    {
        path: '/',

        component: Home,
    },
    {
        path: '/manager-author',
        component: Author,
    },
    {
        path: '/reset-password',
        component: ResetPassword,
        layout: null,
    },
    {
        path: '/manager-user',
        component: User,
    },
    {
        path: '/signin',
        component: SignIn,
        layout: null,
    },
    {
        path: '/signup',
        component: SignUp,
        layout: null,
    },
    {
        path: '/revenue',
        component: Revenue,
    },

    {
        path: '/cart',
        component: Cart,
    },
    ];

const privateRoutes = [
    {
        path: '/',

        component: Home,
    },
];

export { publicRoutes, privateRoutes };
