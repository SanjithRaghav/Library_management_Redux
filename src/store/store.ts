import {configureStore} from '@reduxjs/toolkit'
import bookReducer from '../slices/BookSlice'


export const store = configureStore({
    reducer:bookReducer,
})