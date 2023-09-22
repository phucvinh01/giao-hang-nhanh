import { createSlice } from "@reduxjs/toolkit";
const cateSlice = createSlice({
    name: "category",
    initialState: {
        category: {
            data: null,
            isLoading: false,
            error: false
        },
    },
    reducers: {
        getCategoryStart: (state) => {
            state.category.isLoading = true
        },
        getCategorySuccess: (state, action) => {
            state.category.isLoading = false;
            state.category.data = action.payload;
        },
        getCategoryFailed: (state) => {
            state.category.isLoading = false;
            state.category.error = true;
        },
    }
})


export const {
    getCategoryStart, getCategorySuccess, getCategoryFailed,
} = cateSlice.actions

export default cateSlice.reducer