import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartlists: [],
    quantity: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddCard: (state, action) => {
            const find = state.cartlists.findIndex(item=>item._id === action.payload._id);
            if(find>=0)
                state.cartlists[find].quantity += 1
            else {

                const tempvar = {...action.payload, quantity:1}
                state.cartlists.push(tempvar)
            }

        }
    }
})

export const {AddCard} = cartSlice.actions;

export default cartSlice.reducer;