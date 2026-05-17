import { createSlice } from "@reduxjs/toolkit";

interface Score {
    score : number
}

const initialState : Score = {
    score : 0,
}


export const scoreSlice = createSlice({
    name : 'score',
    initialState,
    reducers : {
        incrementScore : (state) => {
            state.score = state.score + 1;
            console.log("Score incremented")
        },
        resetScore : (state) => {
            state.score = 0; //resetting the score 
        }
    }
})

export const { incrementScore, resetScore } = scoreSlice.actions
export default scoreSlice.reducer