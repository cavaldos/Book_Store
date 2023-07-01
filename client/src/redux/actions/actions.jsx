import { ActionsType } from './actionsType.jsx';

// export const setProduct=(products)=>{
//     return{
//         type: ActionsType.SET_PRODUCT,
//         payload: products
//     }
// }

export const addToCart = (product) => {
    return {//fix add tocart from false to true
        type: ActionsType.ADD_TO_CART,
        payload: product,
        
    };
};
export const setUser = (user) => {
    return {
        type: ActionsType.SET_USER,
        payload: user,
    };
};
