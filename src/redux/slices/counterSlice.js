import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0, isDarkTheme: true },
    reducers: {
        increase: (state, action) => { state.count++; },
        decrease: (state, action) => { state.count--; },
        setCount: (state, action) => { state.count = action.payload; },
        toggleTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
        }
    }
})

export default counterSlice.reducer;

export const { decrease, increase, setCount, toggleTheme } = counterSlice.actions;