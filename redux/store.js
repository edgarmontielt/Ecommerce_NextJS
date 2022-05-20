import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from '../features/auth'
import cartReducer from '../features/cart'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})