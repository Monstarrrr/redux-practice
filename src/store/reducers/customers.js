import { createSlice } from "@reduxjs/toolkit";

export const customersSlice = createSlice({
    name: 'customers',
    initialState: [],
    reducers: {
        addCustomer: (customers, action) => {
            customers.push(action.payload)
        },
        removeCustomer: (customers, action) => {
            customers.splice(action.payload, 1)
        },
    }
})
export const { 
    addCustomer,
    removeCustomer
} = customersSlice.actions;

export default customersSlice.reducer;