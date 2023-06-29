import SignIn from '../components/auth/signin';
import SignUp from '../components/auth/signup';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Author from '../pages/Manager/Author';
import User from '../pages/Manager/User';
import Revenue from '../pages/Revenue';
import Wallet from '../pages/Wallet';
import ResetPassword from '../components/auth/resetpassword';
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
        path: '/my-cart',
        component: Cart,
    },
    {
        path: '/my-wallet',
        component: Wallet,
    },
];

const privateRoutes = [
]

export { publicRoutes, privateRoutes };
