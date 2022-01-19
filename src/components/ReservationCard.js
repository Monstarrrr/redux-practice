// rfc
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeReservation } from '../store/reducers/reservations';

export default function ReservationCard({name, index}) {
    
    const dispatch = useDispatch();
    
    return (
        <div 
            onClick={() => {
                dispatch(removeReservation(index))
            }}
        >
            {name}
        </div>
    )
}
