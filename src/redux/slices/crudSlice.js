import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    tasks: [
        {
            title: 'Headerı Düzenle',
            author: 'Furkan',
            assigned_to: 'Ahmet',
            end_date: '2024-02-29',
            id: '3f13234e-7bb1-4f31-9cad-8911cfe6119c',
        },
        {
            title: 'Navbar Animasyonu',
            author: 'Ali',
            assigned_to: 'Ayşe',
            end_date: '2024-03-03',
            id: '8d519f16-b845-4a14-8094-14b62020d9f8',
        },
        {
            title: 'SEO Optimizasyonu',
            author: 'Ali',
            assigned_to: 'Ahmet',
            end_date: '2024-03-11',
            id: '92135cf3-452b-40e9-bb25-5f644517adea',
        },
    ],
};


const crudSlice = createSlice({
    name: 'crud',
    initialState,
    reducers: {
        addTask: (state, action) => {
            action.payload.id = v4();

            state.tasks.push(action.payload);
        },

        deleteTask: (state, action) => {

            const index = state.tasks.findIndex((i) => i.id === action.payload);

            state.tasks.splice(index, 1);
        },

        editTask: (state, action) => {
            const index = state.tasks.findIndex((i) => i.id === action.payload.id);

            state.tasks.splice(index, 1, action.payload);
        },
    },
});

export default crudSlice.reducer;

export const { addTask, deleteTask, editTask } = crudSlice.actions;