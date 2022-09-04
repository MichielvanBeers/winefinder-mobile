// Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// API
import { wineApi } from "./api";

const store = configureStore({
    reducer: {
        [wineApi.reducerPath]: wineApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(wineApi.middleware)
})

setupListeners(store.dispatch)

export type Rootstate = ReturnType<typeof store.getState>

export default store