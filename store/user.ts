// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

export type User = {
    token: string
}

const initialUserState: User = {
    token: ""
}

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {}
})

export const userActions = userSlice.actions

export default userSlice.reducer