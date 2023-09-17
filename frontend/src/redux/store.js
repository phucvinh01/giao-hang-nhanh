import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import proReducer from './proSlice'
export default configureStore({
    reducer: {
        auth: authReducer,
        product: proReducer
    }
})