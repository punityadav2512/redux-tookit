import { configureStore } from '@reduxjs/toolkit';
import { customReducer } from './reducers';
const store = configureStore({
    reducer: {
        customReducer
    }
})

export default store;