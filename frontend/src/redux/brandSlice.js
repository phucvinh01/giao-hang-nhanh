import { createSlice } from "@reduxjs/toolkit";
const brandSlice = createSlice({
    name: "brand",
    initialState: {
        brand: {
            data: null,
            isLoading: false,
            error: false
        },
    },
    reducers: {
        getBrandStart: (state) => {
            state.brand.isLoading = true
        },
        getBrandSuccess: (state, action) => {
            state.brand.isLoading = false;
            state.brand.data = action.payload;
        },
        getBrandFailed: (state) => {
            state.brand.isLoading = false;
            state.brand.error = true;
        },
    }
})


export const {
    getBrandStart, getBrandSuccess, getBrandFailed,
} = brandSlice.actions

export default brandSlice.reducer