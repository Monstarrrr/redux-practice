import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addItem: (items, action) => {
            items.push(action.payload)
        },
    }
})

export const {
    addItem,
} = itemsSlice.actions;

export default itemsSlice.reducer;