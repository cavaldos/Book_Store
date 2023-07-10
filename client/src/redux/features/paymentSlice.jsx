import { createSlice } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

let currentState = localStorage.getItem('products');
currentState = currentState ? JSON.parse(currentState) : [];
let initialState = {
    products: [],
};
const savedProducts = localStorage.getItem('products');
if (savedProducts) {
    initialState.products = JSON.parse(savedProducts);
}

export const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        // products: currentState,
        products: [
            {
                currentState,
            },
        ],
    },

    reducers: {
        addQuantity: (state, action) => {
            const newProduct = action.payload.product;
            const existingProduct = state.products.find(
                (item) => item.id === newProduct.id,
            );

            if (existingProduct) {
                const newProducts = state.products.map((item) => {
                    if (item.id === newProduct.id) {
                        return {
                            ...item,
                            quantity: item.quantity + newProduct.quantity,
                        };
                    }
                    return item;
                });
                return {
                    ...state,
                    products: newProducts,
                };
            } else {
                return {
                    ...state,
                    products: [...state.products, newProduct],
                };
            }
        },
        removeQuantity: (state, action) => {
            const id = action.payload.id;
            const newProducts = state.products.filter((item) => item.id !== id);
            return {
                ...state,
                products: newProducts,
            };
        },
        updatePrice: (state, action) => {
            const { id, newPrice } = action.payload;
            const newProducts = state.products.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        price: newPrice,
                    };
                }
                return item;
            });
            return {
                ...state,
                products: newProducts,
            };
        },
        resetState: (state) => {
            return initialState;
        },
    },
});

export const { addQuantity, updatePrice, removeQuantity, resetState } =
    paymentSlice.actions;

export default paymentSlice.reducer;

// {
//       const newProduct = action.payload.product;
//       const existingProduct = state.products.find(item => item.id === newProduct.id);

//       if (existingProduct) {
//         const newProducts = state.products.map(item => {
//           if (item.id === newProduct.id) {
//             return {
//               ...item,
//               quantity: item.quantity + newProduct.quantity
//             };
//           }
//           return item;
//         });
//         return {
//           ...state,
//           products: newProducts
//         };
//       } else {
//         return {
//           ...state,
//           products: [...state.products, newProduct]
//         };
//       }
//     },

// updatePrice: (state, action) => {
//   // Lấy id và giá mới từ action payload
//   const { id, newPrice } = action.payload;

//   // Tạo mảng mới chứa các phần tử đã được cập nhật giá
//   const newProducts = state.products.map(item => {
//     if (item.id === id) {
//       return {
//         ...item,
//         price: newPrice
//       };
//     }
//     return item;
//   });

//   return {
//     ...state,
//     products: newProducts
//   };
// },
