import { createSlice } from "@reduxjs/toolkit";

export const customersSlice = createSlice({
    name: 'customers',
    initialState: ["Monstar"],
    reducers: {
        addCustomer: (customers, action) => {
            customers.push(action.payload)
        },
    }
})

export const { 
    addReservation,
    removeReservation
} = customersSlice.actions;

export default customersSlice.reducer;