import ActionsType from '../actions/actionsType';

const initialState = {
    products: [
        {
            id: 1,
            title: 'book',
            category: 'novel',
            price: 10,
            description: 'This is book',
            image: 'https://images.unsplash.com/photo-1612835362596-4b0b2b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            author: 'John Doe',
            rating: 4.5,
            quantity: 1,
            addtocart: false,
        },
    ],
    users: [
        {
            id: 1,
            name: 'John Doe',
            email: 'jhon@gmail.com',
            password: '123456',
            role: 'admin',
        },
    ],
};

export const productReducer = (state = initialState.products, actions) => {
    switch (actions.type) {
        case ActionsType.ADD_TO_CART:
            return { ...state, products: actions.payload };

        default:
            return state;
    }
};
export const userReducer = (
    state = initialState.users,
    { type, payload },
) => {
    switch (type) {
        case ActionsType.SET_USER:
            return { ...state, users: payload };
        default:   
            return state;
    }
};

//     switch (type) {
//         case ActionsType.SET_PRODUCT:
//             return { ...state, products: payload };
//             case ActionsType.SELECTED_PRODUCT:
//                 return { ...state, ...payload };
//         case ActionsType.REMOVE_SELECTED_PRODUCT:
//             return state;

//         default:
//             return state;
//         }
// };

// export const productReducer =(state =initialState,{type,payload})=>{
//     switch (type) {
//         case ActionsType.SET_PRODUCT:
//             return {...state, products: payload};
//         case ActionsType.SELECTED_PRODUCT:
//             return {...state, ...payload};
//         case ActionsType.REMOVE_SELECTED_PRODUCT:
//             return state;
//     }
// }
