import { combineReducers } from "redux";
import reservationsSlice from "../reducers/reservations";
import customersSlice from "../reducers/customers";

export default combineReducers({
    reservations: reservationsSlice,
    customers: customersSlice,
})