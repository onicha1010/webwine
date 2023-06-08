import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    productList: [],
    cartItem: [],
    favItem: []
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

        setDataProduct: (state, action) => {
            state.productList = [...action.payload];
            // console.log(action);
        },

        addCartItem: (state, action) => {
            console.log(action);
            const check = state.cartItem.some((el) => el._id === action.payload._id);
            if (check) {
                toast("Already Wine in Cart");
            } else {
                toast("Wine Add Successfully");
                const total = action.payload.price;
                state.cartItem = [...state.cartItem,{ ...action.payload, qty: 1, total: total }];
            }
        },

        fevCartItem: (state, action) => {
            console.log(action);
            const check = state.favItem.some((el) => el._id === action.payload._id);
            if (check) {
                toast("Dislike Wine");
            } else {
                toast("Wine Favorite");
                const total = action.payload.price;
                state.favItem = [...state.favItem,{ ...action.payload, qty: 1, total: total }];
            }
        },

        deleteCartItem: (state, action) => {
            toast("Wine Delete Successfully");
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            state.cartItem.splice(index, 1);
            console.log(index);
        },

        deleteFavItem: (state, action) => {
            toast("Dislike Wine Successfully");
            const index = state.favItem.findIndex((el) => el._id === action.payload);
            state.favItem.splice(index, 1);
            console.log(index);
        },

        increaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qty = state.cartItem[index].qty;
            const qtyInc = ++qty;
            state.cartItem[index].qty = qtyInc;

            const price = state.cartItem[index].price;
            const total = price * qtyInc;

            state.cartItem[index].total = total;
        },

        decreaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qty = state.cartItem[index].qty;
            if (qty > 1) {
                const qtyDec = --qty;
                state.cartItem[index].qty = qtyDec;

                const price = state.cartItem[index].price;
                const total = price * qtyDec;

                state.cartItem[index].total = total;
            }
        },
    },
});

export const {setDataProduct, addCartItem, fevCartItem, deleteCartItem, deleteFavItem, increaseQty, decreaseQty,} = productSlice.actions;

export default productSlice.reducer;