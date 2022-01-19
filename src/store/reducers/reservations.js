import { createSlice } from "@reduxjs/toolkit";

export const reservationsSlice = createSlice({
    name: 'reservations',
    initialState: ["Monstar"],
    reducers: {
        addReservation: (reservations, action) => {
            reservations.push(action.payload)
        },
        removeReservation: (reservations, action) => {
            reservations.splice(action.payload, 1)
        },
    }
})
export const { 
    addReservation,
    removeReservation
} = reservationsSlice.actions;

export default reservationsSlice.reducer;