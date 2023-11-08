import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import prodReducer from "../redux/features/prod/productSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        prod: prodReducer,
    }
})