import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    a: 0
}
export const customReducer = createReducer(initialState, {
    increment: (state, action) => {
        state.a += 1;
    },
    decrement: (state, action) => {
        state.a -= 1
    },
    incrementByNumber: (state, action) => {
        state.a += action.payload;
    }
})