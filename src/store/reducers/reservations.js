import { createSlice } from "@reduxjs/toolkit";

export const reservationsSlice = createSlice({
    name: 'reservations',
    initialState: [],
    reducers: {
        addReservation: (reservations, action) => {
            reservations.push({ // [ { ... }, { pushedReservation } ]
                ...action.payload, // { name, id }
                dateJoined: Date.now() // { name, id, dateJoined }
            })
        },
    },
})

export const {
    addReservation,
} = reservationsSlice.actions;

export default reservationsSlice.reducer;