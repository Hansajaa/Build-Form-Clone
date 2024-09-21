import { configureStore } from "@reduxjs/toolkit";
import RootStoreReducer from "../feature/RootStoreSlice";

export const store = configureStore({
    reducer:RootStoreReducer
})