import {createSlice} from '@reduxjs/toolkit'

export interface User {
    uid : String,
    email : String
}

const initialState : User = {
    uid : "",
    email : "",
}


export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setCurrentUser : (state, action) => {
            state.uid = action.payload.uid;
            state.email = action.payload.email;
        },
        removeCurrentUser : (state) => {
            state.uid = "";
            state.email = "";
        },
    }
})

export const {  setCurrentUser, removeCurrentUser } = userSlice.actions
export default userSlice.reducer