import { combineReducers } from "redux";
import customersSlice from "../reducers/customers";
import reservationsSlice from "../reducers/reservations";
import itemsSlice from "../reducers/items";

export default combineReducers({
    reservations: reservationsSlice,
    customers: customersSlice,
    items: itemsSlice,
})