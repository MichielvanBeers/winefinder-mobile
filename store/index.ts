// Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Reducer
import userReducer from './user'

const store = configureStore({
    reducer: { user: userReducer}
})

export type Rootstate = ReturnType<typeof store.getState>

export default store