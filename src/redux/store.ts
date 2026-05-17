import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import scoreReducer from './slices/scoreSlice'
export const store = configureStore({
    reducer : {
        user : userReducer,
        score : scoreReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch